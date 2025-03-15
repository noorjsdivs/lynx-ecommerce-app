import { useState, useEffect } from "@lynx-js/react";
import useCartStore from "../../store.ts";
import redHeart from "../assets/redHeart.png";
import whiteHeart from "../assets/whiteHeart.png";
import type { ProductData } from "../../types.ts";
const WishlistIcon = ({ product }: { product: ProductData }) => {
  const { favoriteProduct, addToFavorite } = useCartStore();
  const [existingProduct, setExistingProduct] = useState<ProductData | null>(
    null
  );
  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?.id === product?.id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);
  const onTap = () => {
    addToFavorite(product);
  };
  return (
    <view
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1,
      }}
      bindtap={onTap}
    >
      <image
        src={existingProduct ? redHeart : whiteHeart}
        style={{ width: "15px", height: "15px" }}
      />
    </view>
  );
};

export default WishlistIcon;
