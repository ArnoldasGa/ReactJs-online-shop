import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Api from "../components/api";

function Profile() {
  const [profile, setProfile] = useState(null); // Store user profile
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Logout function
  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  // Fetch user profile
  useEffect(() => {
    if (!token) {
      LogOut(); // Ensure users without tokens are logged out
      return;
    }

    Api.get('/users/me', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`, // Fixed extra space after 'Bearer'
      }
    })
      .then(response => {
        // console.log('Response data:', response.data);
        setProfile(response.data); // Store profile in state
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        LogOut(); // Logout on error (401, etc.)
      });
  }, [token, navigate]); // Runs once when the component mounts or token changes

  if (!profile) {
    return <p>Loading profile...</p>; // Loading state
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Profilis</h2>

      <div className="mb-4">
        <p><strong>Naudotojo vardas:</strong> {profile.username}</p>
        <p><strong>El. paštas:</strong> {profile.email}</p>
        <p><strong>Rolė:</strong> {profile.role?.name || 'N/A'}</p>
      </div>

      <button
        className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
        onClick={LogOut}
      >
        Atsijungti
      </button>
    </div>
  );
}

export default Profile;
