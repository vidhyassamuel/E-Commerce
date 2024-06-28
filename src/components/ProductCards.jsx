import { useEffect, useState } from "react";
import { PRODUCT_API } from "../constant/apiConstant";
import axios from "axios";
import "../css/ProductCards.css";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(PRODUCT_API)
      .then((response) => {
        setProducts(response?.data);
        console.log(response.data, "<==response.data");
      })
      .catch((error) => {
        console.error(`Error in fetching`, error);
      });
  }, []);

  const imageSize = { width: "150px", height: "150px" };

  return (
    <div className="cardWrapper">
      {products?.map((product, index) => {
        return (
          <div key={index} className="mainCard">
            <img src={product.image} alt={product.title} style={imageSize} />
            <h6> {product.title} </h6>
            <h4> {product?.price} </h4>
            <div>
              <span> {product?.rating.rate} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
