import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const ControllerLay = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const homeData = useSelector((state) => state.homeSlice);
  const sideBarStyles = {
    borderRight: `1px solid ${colorsData.data.mainColor}`,
  };
  const liStyle = {
    borderBottom: `5px solid ${colorsData.data.mainColor}`,
  };
  return (
    <>
      <div
        style={sideBarStyles}
        className="fixed top-0 left-0 h-[50vh] overflow-y-scroll lg:overflow-auto lg:h-full w-full lg:w-[20%] bg-black text-white p-5"
      >
        <div>
          <img
            src={homeData.data.logoImg}
            alt={homeData.data.brandName}
            className={`w-32`}
          />
        </div>
        <ul className={`flex flex-col text-xl mt-20`}>
          <li style={liStyle} className={`mb-2 pb-4`}>
            <Link to="/controls/deleteCars" className={`text-white`}>
              Delete a Car
            </Link>
          </li>
          <li style={liStyle} className={`mb-2 pb-4`}>
            <Link to="addACar" className={`text-white`}>
              Add A car
            </Link>
          </li>
          <li style={liStyle} className={`mb-2 pb-4`}>
            <Link to="/controls/editACars" className={`text-white`}>
              Edit A Car
            </Link>
          </li>
          <li style={liStyle} className={`mb-2 pb-4`}>
            <Link to="" className={`text-white`}>
              Manage The Bookings
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default ControllerLay;
