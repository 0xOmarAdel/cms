import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-full">
      <Lottie
        animationData={loading}
        style={{
          height: 80,
        }}
      />
    </div>
  );
};

export default Loading;
