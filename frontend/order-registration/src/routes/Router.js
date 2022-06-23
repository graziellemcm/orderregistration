import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "../components/Header";
import Estoque from "../pages/EstoquePage/EstoquePage";
import Product from "../pages/ProductsPage/ProductsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import TotalValue from "../pages/TotalValuePage/TotalValue";
const Router = () => {

    return (
        <BrowserRouter>
        <Headers/>
        <Routes>
            
            <Route exact path="/" element={ <RegisterPage/>}/>
            <Route exact path="/stock" element={ <Estoque/>}/>
            <Route exact path="/products" element={ <Product/>}/>
            <Route exact path="/totalvalue" element={ <TotalValue/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;