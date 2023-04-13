import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { categoryCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

export const AppContext = createContext ( {
  
});

export default function App() {
  const [categories, setCategories]= useState([])
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
  return (
    <div className="App">
      <AppContext.Provider value={{categories}}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
