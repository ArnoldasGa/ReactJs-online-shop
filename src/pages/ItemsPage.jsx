import React , {useState, useEffect} from "react";
import Card from "../components/Card";
import axios from "axios";

function ItemsPage() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8005/categories/");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProducys = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8005/products/");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
    getProducys();
  }, []);


  const animate = (id) => {
    console.log(id);
    const checkbox = document.getElementById(id);
    const parent = checkbox.parentElement;
  }

  return (
    <>
    <div className="flex">
    <aside className="flex-none border-t">
    <div className="p-4 light-mode dark:bg-gray-800 dark:text-white h-full sticky top-0 delay-50 duration-300">
      Kategorijos
      {categories.map((category, index) => (
        <div className="flex items-center space-x-2 rounded p-2 transition delay-50 duration-500 hover:bg-gray-100 accent-teal-600">
          <input type="checkbox" id={category.category} onChange={() => animate(category.category)} name="languageCheckbox" 
          className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
          <label for={category.category} className="flex w-full space-x-2 text-sm hover:text-black"> {category.category} </label>
        </div>
      )
      )}
    </div>
    </aside>
    <div className="flex-1">
      <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map((product) => (
      <Card key={product.id} product={product }/>
      ))}
    </section>
    </div>
    </div>
    </>
  );
}

export default ItemsPage;
