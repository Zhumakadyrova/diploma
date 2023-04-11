import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryCollection } from "../../firebase";
import "./CategoryList.css";
export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  //выполнить эту функцию только один раз
  useEffect(() => {
    //получить категории из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут храниться в snapshot.докс

      //создать массив для категорий
      const newCategories = [];

      snapshot.docs.forEach((doc) => {
        // doc = категорий
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      //задать новый массив как состояние компонент
      setCategories(newCategories);
    });
  }, []);
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));
  return <div className="CategoryList">{output}</div>;
}
