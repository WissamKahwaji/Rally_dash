import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddACar = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const liStyle = {
    background: colorsData.data?.mainColor,
  };
  return (
    <PageContainer
      className={`flex items-center flex-col justify-center h-screen`}
    >
      <h2 className={`text-2xl mb-4`}>Add A Car</h2>
      <ul className={`flex items-center`}>
        <li
          style={liStyle}
          className={`mx-2 text-lg p-2 rounded-md font-semibold`}
        >
          <Link to="limoCar">Limo Car</Link>
        </li>
        <li
          style={liStyle}
          className={`mx-2 text-lg p-2 rounded-md font-semibold`}
        >
          <Link to="rentalCar">Rental Car</Link>
        </li>
      </ul>
    </PageContainer>
  );
};

export default AddACar;
