import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      
      <div className="Product-text">
      <img src={product.picture} alt={product.name} />
        <h3>{product.name}</h3>
        <span>{product.price} som</span>
        <AddToCart product={product} />
      </div>
      <div className="Product_description">
      <p>{product.description}</p>
      </div>
    </div>
  );
}
