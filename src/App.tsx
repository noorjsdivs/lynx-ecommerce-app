import { useEffect, useState } from "@lynx-js/react";

import "./App.css";
import Container from "./components/Container.tsx";
import type { ProductData } from "../types.ts";
import ProductCard from "./components/ProductCard.tsx";
import Loading from "./components/Loading.tsx";
import Header from "./components/Header.tsx";

export function App() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      await fetch("https://fakestoreapi.in/api/products?limit=20")
        .then((res) => res.json())
        .then((res) => setProducts(res?.products));
    } catch (error) {
      console.error("Product Fetching Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // https://fakestoreapi.in/docs

  return (
    <view>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <text className="title">Our Products</text>
          <view>
            <list
              className="list"
              list-type="waterfall"
              column-count={2}
              scroll-orientation="vertical"
              custom-list-name="list-container"
            >
              {products?.map((product, index) => (
                <list-item key={"" + index} item-key={"" + index}>
                  <ProductCard product={product} />
                </list-item>
              ))}
            </list>
          </view>
        </Container>
      )}
    </view>
  );
}
