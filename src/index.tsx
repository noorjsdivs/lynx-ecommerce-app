import { root } from "@lynx-js/react";
import { App } from "./App.js";
import { MemoryRouter, Routes, Route } from "react-router";
import Product from "./screens/Product.tsx";
import Cart from "./screens/Cart.tsx";
import Wishlist from "./screens/Wishlist.tsx";

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
