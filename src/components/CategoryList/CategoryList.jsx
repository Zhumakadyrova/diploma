import { useContext, useState } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoryList() {
  const { categories, products } = useContext(AppContext);
  const [showSubcategories, setShowSubcategories] = useState({});

  const handleMouseEnter = (categoryId) => {
    setShowSubcategories((prev) => ({ ...prev, [categoryId]: true }));
  };

  const handleMouseLeave = (categoryId) => {
    setShowSubcategories((prev) => ({ ...prev, [categoryId]: false }));
  };

  const output = categories.map((category) => {
    const relatedProducts = products.filter((product) => product.category === category.id);
    const relatedProductList = relatedProducts.map((product) => (
      <li key={product.id}>
        <NavLink to={"/product/" + product.id}>{product.name}</NavLink>
      </li>
    ));

    const showSubcategory = showSubcategories[category.id];

    return (
      <li
        key={category.id}
        onMouseEnter={() => handleMouseEnter(category.id)}
        onMouseLeave={() => handleMouseLeave(category.id)}
      >
        <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
        <DeleteCategory category={category} />
        <ul className="subcategory" style={{ display: showSubcategory ? "block" : "none" }}>
          {relatedProductList}
        </ul>
      </li>
    );
  });

  return (
    <div className="CategoryList">
      <ul id="dropdown" className="dropdownContent">
        {output}
      </ul>
      <AddCategory />
    </div>
  );
}
