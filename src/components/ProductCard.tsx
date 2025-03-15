import { useNavigate } from "react-router";
import type { ProductData } from "../../types.ts";
import WishlistIcon from "./WishlistIcon.tsx";

const ProductCard = ({ product }: { product: ProductData }) => {
  const nav = useNavigate();

  return (
    <view
      bindtap={() => nav(`/product`, { state: { product } })}
      className="productCard"
    >
      <image src={product?.image} className="image" />
      <WishlistIcon product={product} />
    </view>
  );
};

export default ProductCard;
