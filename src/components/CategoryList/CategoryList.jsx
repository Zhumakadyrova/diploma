import { useContext } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
      <DeleteCategory category={category}/>
      <ul className="subcategory">
        <li>123</li>
        <li>34545</li>
        <li>3454</li>
      </ul>
    </li>
  ));
  return (<div className="CategoryList">
      <ul id="dropdown" className="dropdownContent">{output}</ul>
      <AddCategory/>
    </div>)
}
