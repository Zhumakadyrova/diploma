import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { categoryCollection, productCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

export const AppContext = createContext ( {
  categories: [],
  products: [],
});

export default function App() {
  const [categories, setCategories]= useState([]);
  const [products, setProducts] = useState([]);
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

           //получить категории из списка категорий
           getDocs(productCollection).then((snapshot) => {
            //категории будут храниться в snapshot.докс
      
            //создать массив для категорий
            const newProducts = [];
      
            snapshot.docs.forEach((doc) => {
              // doc = категорий
              const product = doc.data();
              product.id = doc.id;
      
              newProducts.push(product);
            });
            //задать новый массив как состояние компонент
            setProducts(newProducts);
          });
    }, []);
    
  return (
    <div className="App">
      <AppContext.Provider value={{categories, products}}>
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
