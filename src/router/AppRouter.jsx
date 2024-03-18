import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .
         "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır
         
          */}
          <Route exact path="/" element={<Main />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/about" element={<About />} />

          {/* It redirects to Private Router for pages that can be accessed with password control.*/}
          {/* <Route path="/contact" element={<PrivateRouter />}>
            <Route path="" element={<ContactForm />} />
          </Route> */}

          {/* <Route path="/contact" element={<ContactForm />} /> */}
          {/* <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
