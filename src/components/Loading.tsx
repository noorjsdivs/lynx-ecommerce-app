import loading from "../assets/loading.png";
const Loading = () => {
  return (
    <view className="loading">
      <image src={loading} className="loadingImage" />
      <text className="title">Product is loading....</text>
    </view>
  );
};
export default Loading;
