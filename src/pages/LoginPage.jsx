import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';


function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:8005/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        const token = data.token; // Assuming your backend returns { token: "jwt-token-here" }
        localStorage.setItem('token', token); // Save token in localStorage
        navigate('/profile');
        window.location.reload();
      } else {
        setError(data.message || 'Netinkami prisijungimo duomenys.');
      }
    } catch (err) {
      setError('Nepavyko prisijungti prie serverio.');
      console.error('Login error:', err);
    }
  };
  return (
    <>
       <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Naudotojo vardas
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Slaptažodis
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
            >
              Prisijungti
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
