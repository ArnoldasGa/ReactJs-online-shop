import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function SingeItemPage() {

  const [product, setProduct] = useState(null);
  const {id} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8005/products/getItem?id=${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [])


  return (
    <>
      <div class="flex flex-wrap justify-center mt-10">
      {loading ? (
            <div>Loading...</div>
          ) : (
              <div className="font-medium cursor-pointer" value="all">
                {product.name}
              </div>
              )
          }
      </div>
    </>
  );
}

export default SingeItemPage;
