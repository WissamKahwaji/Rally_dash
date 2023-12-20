import React from "react";
import { useSelector } from "react-redux";
import { CgSpinner } from "react-icons/cg";
import classNames from "classnames";
const SubmittingButton = ({ isSubmitting }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitButtonStyle = {
    background: colorsData.data?.mainColor,
  };
  console.log(isSubmitting);
  return (
    <button
      style={submitButtonStyle}
      disabled={isSubmitting}
      className={`mt-4 relative text-center border  py-1 m-auto px-4 rounded-lg text-lg font-semibold`}
    >
      {isSubmitting && (
        <span
          className={
            " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          }
        >
          <CgSpinner className="  animate-spin " />
        </span>
      )}
      <span>Submit</span>
    </button>
  );
};

export default SubmittingButton;
