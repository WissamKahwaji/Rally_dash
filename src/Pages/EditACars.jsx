import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../API/baseURL";
import { useSelector } from "react-redux";

const EditACars = () => {
  const colorsData = useSelector((state) => state.colorsSlice);

  const liStyle = {
    background: colorsData.data.mainColor,
  };
  return (
    <PageContainer
      className={`flex flex-col items-center justify-center h-screen`}
    >
      {/* <ul className={`grid grid-cols-3 gap-5`}>
        {data.data.categoryOneContent
          .concat(data.data.categoryTwoContent)
          .map((ele) => (
            <li className={`h-[300px]`}>
              <Link to={ele._id} className={`w-full h-full`}>
                <img
                  src={ele.img}
                  alt={ele.id}
                  className={`rounded-lg h-[80%] object-cover w-full`}
                />
                <p>{ele.title}</p>
              </Link>
            </li>
          ))}
      </ul> */}
      <h2 className={`text-2xl mb-4`}>Edit A Car</h2>
      <ul className={`flex items-center`}>
        <li
          style={liStyle}
          className={`mx-2 text-lg p-2 rounded-md font-semibold`}
        >
          <Link to="rentalCar">Rental Car</Link>
        </li>
        <li
          style={liStyle}
          className={`mx-2 text-lg p-2 rounded-md font-semibold`}
        >
          <Link to="limoCar">Limo Car</Link>
        </li>
      </ul>
    </PageContainer>
  );
};

export default EditACars;
// export const editCarsLoader = async () => {
//   const response = await fetch(`${baseURL}/carPage`);
//   const data = await response.json();
//   return data;
// };
