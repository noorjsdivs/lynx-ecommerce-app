import useCartStore from "../../store.ts";
import type { ProductData } from "../../types.ts";
import Container from "../components/Container.tsx";
import { useLocation } from "react-router";
import Header from "../components/Header.tsx";
import WishlistIcon from "../components/WishlistIcon.tsx";

const Product = () => {
  const { state } = useLocation();
  const product: ProductData = state?.product;
  const { addItem, addToFavorite } = useCartStore();

  return (
    <view>
      <Container>
        <Header />
        <view className="product">
          <view style={{ position: "relative" }}>
            <image src={product?.image} className="productImage" />
            <WishlistIcon product={product} />
          </view>
          <text className="productTitle">{product?.title}</text>
          <text className="description">{product?.description}</text>
          <view className="productDescription">
            <text>
              Category:
              <text className="heading">{product?.category}</text>
            </text>
            <text>
              Model:
              <text className="heading">{product?.model}</text>
            </text>
            <text>
              Color:
              <text className="heading">{product?.color}</text>
            </text>
            <text>
              Brand:
              <text className="heading">{product?.brand}</text>
            </text>
          </view>
          <view className="priceView">
            <text className="price">${product?.price}</text>
            <text className="mainPrice">
              ${product?.price + product?.discount}
            </text>
          </view>
          <view className="addToCartView" bindtap={() => addItem(product)}>
            <text className="addToCartText">Add to Cart</text>
          </view>
        </view>
      </Container>
    </view>
  );
};

export default Product;
