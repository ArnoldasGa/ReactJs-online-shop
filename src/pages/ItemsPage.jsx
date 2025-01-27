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

  return (
    <>
    <div className="flex">
    {/* <aside className="flex-none">
    <div className="p-4">
      Kategorijos
      {categories.map((category, index) => (
          <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input type="checkbox" id="javascriptCheckbox" name="languageCheckbox" class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
          <label for="javascriptCheckbox" class="flex w-full space-x-2 text-sm"> {category.category} </label>
        </div>
      )
      )}
    </div>
    </aside> */}
    <div className="flex-1">
    <div className="p-4 text-gray-600 dark:text-gray-300 outline-none focus:outline-none w-6/12 place-self-center">
        <div className="relative flex">
          <select className="bg-white dark:bg-gray-800 h-10 px-5 rounded-l-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden">
            {loading ? (
            <option>Loading...</option>
          ) : (
            <>
              <option className="font-medium cursor-pointer" value="all">
                Viskas
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.category}
                </option>
              ))}
            </>
          )}
          </select>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white dark:bg-gray-800 h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600"
            autocomplete="off"
            spellcheck="false"
            required
            step="any"
            autocapitalize="none"
            autofocus
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
          >
            <svg
              className="h-4 w-4 fill-current dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
            </svg>
          </button>
        </div>
      </div>
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
