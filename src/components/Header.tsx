import { useNavigate } from "react-router";
import arrowBack from "../assets/arrowBack.png";
const Header = () => {
  const nav = useNavigate();
  return (
    <view className="header">
      <view bindtap={() => nav(-1)} className="backView">
        <image src={arrowBack} className="arrowImage" />
        <text className="backText">Back</text>
      </view>
      <text style="font-size:16px;font-weight:600">Cart</text>
    </view>
  );
};
export default Header;
