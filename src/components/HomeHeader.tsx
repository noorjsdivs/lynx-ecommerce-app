import logo from "../assets/lynx-logo.png";
const HomeHeader = () => {
  return (
    <view style="display:flex;align-items:center;justify-content:space-between;padding-bottom:5px;border-bottom:1px solid #ffffff80; margin-bottom:10px">
      <image src={logo} style="width:50px; height:50px" />
      <text style="font-size:20px;text-transform: uppercase;font-weight:800">
        LYNX APP
      </text>
    </view>
  );
};
export default HomeHeader;
