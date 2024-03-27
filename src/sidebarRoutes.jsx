// SidebarRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/todo/todoList";
import Calculator from "./pages/calculator/calculator";
import HomeProduct from "./pages/products/homeProduct";
import ProductBuy from "./pages/products/buyProduct/buyProduct";

const SidebarRoutes = () => {
  return (
    <Routes>
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/home-product" element={<HomeProduct />} />
      <Route path="/buy-products" element={<ProductBuy />} />
    </Routes>
  );
};

export default SidebarRoutes;
