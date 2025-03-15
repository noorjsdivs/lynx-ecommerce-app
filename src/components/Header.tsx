import logo from "../assets/lynx-logo.png";
import arrowBack from "../assets/arrowBack.png";
import cartIcon from "../assets/cartIcon.png";
import heartIcon from "../assets/heartIcon.png";
import { useLocation, useNavigate } from "react-router";
import useCartStore from "../../store.ts";
const Header = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { items, favoriteProduct } = useCartStore();
  return (
    <view style="display:flex;align-items:center;justify-content:space-between;padding-bottom:5px;border-bottom:1px solid #ffffff80">
      {isHome ? (
        <image src={logo} style="width:30px; height:30px" />
      ) : (
        <view bindtap={() => nav(-1)} className="backView">
          <image src={arrowBack} className="arrowImage" />
          <text className="backText">Back</text>
        </view>
      )}
      <view className="headerCart">
        <view
          bindtap={() => nav("/wishlist")}
          style="position: relative; display: inline-block;"
        >
          <image src={heartIcon} style="width:20px; height:20px" />
          <view style="position: absolute; top: -5px; right: -5px; background-color: red; border-radius: 50%; width: 13px; height: 13px; display: flex; align-items: center; justify-content: center;">
            <text style="color: white; font-size: 10px;font-weight:600">
              {favoriteProduct?.length > 0 ? favoriteProduct?.length : 0}
            </text>
          </view>
        </view>
        <view
          bindtap={() => nav("/cart")}
          style="position: relative; display: inline-block;"
        >
          <image src={cartIcon} style="width:20px; height:20px" />
          <view style="position: absolute; top: -5px; right: -5px; background-color: red; border-radius: 50%; width: 13px; height: 13px; display: flex; align-items: center; justify-content: center;">
            <text style="color: white; font-size: 10px;font-weight:600">
              {items?.length > 0 ? items?.length : 0}
            </text>
          </view>
        </view>
      </view>
    </view>
  );
};
export default Header;
