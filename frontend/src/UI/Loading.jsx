import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Loading = () => {
  return (
    <Lottie
      animationData={loading}
      style={{
        height: 80,
      }}
    />
  );
};

export default Loading;
