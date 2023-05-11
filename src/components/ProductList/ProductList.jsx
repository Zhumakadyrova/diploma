import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductList.css";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.path}>{product.name}</Link>
        <span>{product.price} USD </span>
        <AddToCart product={product} />
        <DeleteProduct product={product} />
      </div>
    ));
  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
{/* <div className="ProductList">
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <span>{categoryName}</span>
          <FaChevronDown className="dropdown-icon" />
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            {categoryProducts.map((product) => (
              <li key={product.id}>
                <Link to={"/product/" + product.path}>{product.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div> */}
