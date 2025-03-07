import React, { useState } from "react";
import ReadMore from "./ReadMore";
import createDOMPurify from "dompurify";
import Slider from "./customSlider/Slider";
import YouTubeEmbed from "./YouTubeEmbed";
import { Helmet } from "react-helmet-async";
import { useCart } from './CartContext'; // Import the useCart hook

const DOMPurify = createDOMPurify(window);

const FullProduct = ({ product }) => {
  const [showMore, setShowMore] = useState(false);
  const { addToCart } = useCart();  // Access the addToCart function from the context

  return (
    <>
      <Helmet>
        <title>
          {product?.name
            ? `${product.name} - Buy Now for ${product.price}€`
            : "Product Details"}
        </title>
        <meta
          name="description"
          content={
            product?.description?.substring(0, 150) || "Explore our products"
          }
        />
        <meta property="og:title" content={product?.name || "Product"} />
        <meta
          property="og:type"
          content={product?.category.category || "Type"}
        />
        <meta
          property="og:description"
          content={
            product?.description?.substring(0, 150) ||
            "Discover amazing products"
          }
        />
        <meta
          property="og:image"
          content={product?.image || "/default-image.jpg"}
        />
      </Helmet>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl min-w-[300px] mx-auto p-4 bg-gray-100 dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <Slider />
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                <button
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold"
          onClick={() => addToCart(product)}
        >
          Pridėti į pirkinių krepšelį
        </button>
                </div>
                <div className="w-1/2 px-2 relative group">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex items-center justify-center"
                  >
                    <button type="button" className="relative">
                      <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-white bg-black text-sm py-1 px-2 rounded shadow opacity-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:pointer-events-auto">
                        Share on Facebook
                      </span>
                      <svg
                        viewBox="0 0 320 512"
                        height="1.2em"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Produkto tipas:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.category.category}
                  </span>
                </div>
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Raktiniai žodžiai:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.keywords}
                  </span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Kaina:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.price}€
                  </span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Kilmės šalis:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.country.country}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Yra prekyboi:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Taip</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Produkto Aprašymas:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        showMore
                          ? product.description
                          : `${product.description.substring(0, 250)}...`
                      ),
                    }}
                  />
                  <button
                    className="btn mt-2"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Mažiau..." : "Plačiau..."}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <YouTubeEmbed videoId="yL_Tr8-Bl5o" />
      </div>
    </>
  );
};

export default FullProduct;
