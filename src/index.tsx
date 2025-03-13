import { root } from "@lynx-js/react";
import { App } from "./App.js";
import { MemoryRouter, Routes, Route } from "react-router";
import Product from "./screens/Product.tsx";

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
