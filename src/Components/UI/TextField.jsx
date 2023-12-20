import React from "react";
import { useSelector } from "react-redux";

const TextField = ({ name, label, register, type = "text" }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  console.log(colorsData);
  const textStyle = {
    background: `${colorsData.data?.linear || "white"}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };

  const inputStyle = {
    border: `1px solid ${colorsData.data?.mainColor || "white"}`,
  };
  return (
    <div>
      <label style={textStyle} className={`flex text-xl gap-2 flex-col mt-4`}>
        <span>{label}</span>
        <input
          type={type}
          {...register(name)}
          style={inputStyle}
          className={`bg-transparent rounded-md p-1 outline-none`}
        />
      </label>
    </div>
  );
};

export default TextField;
