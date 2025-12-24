import React from "react";
import { ThreeDots } from "react-loader-spinner";
const loader = () => {
  return (
    <div className="row text-center" style={{ lineHeight: "600px" }}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loader;
