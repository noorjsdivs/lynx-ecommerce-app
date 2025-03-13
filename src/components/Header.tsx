import { useNavigate } from "react-router";
import arrowBack from "../assets/arrowBack.png";
const Header = () => {
  const nav = useNavigate();
  return (
    <view className="header">
      <view className="backView" bindtap={() => nav(-1)}>
        <image className="arrowImage" src={arrowBack} />
        <text className="backText">Back</text>
      </view>
    </view>
  );
};
export default Header;
