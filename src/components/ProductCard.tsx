import { useNavigate } from "react-router";
import type { ProductData } from "../../types.ts";

const ProductCard = ({ product }: { product: ProductData }) => {
  const nav = useNavigate();
  return (
    <view
      bindtap={() => nav(`/product`, { state: { product } })}
      className="productCard"
    >
      <image
        bindtap={() => console.log(product, "product")}
        src={product?.image}
        className="image"
      />
    </view>
  );
};

export default ProductCard;
