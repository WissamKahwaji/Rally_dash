import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
import { homeActions } from "../Store/homeSlice";
import { colorsActions } from "../Store/colorsSlice";

const Root = () => {
  const { dataColors, dataHome } = useLoaderData();
  const [isAuth, setIsAuth] = useState(false);
  const [pass, setPass] = useState();
  const dispatch = useDispatch();
  dispatch(colorsActions.storeColors(dataColors));
  dispatch(homeActions.storeHome(dataHome));
  const colorsData = useSelector((state) => state.colorsSlice);
  const homeData = useSelector((state) => state.homeSlice);
  const inputStyle = {
    color: "white",
    backgroundColor: colorsData.data.mainColor,
  };

  console.log(colorsData, homeData);

  const submitStyles = {
    backgroundColor: colorsData.data.mainColor || "white",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass === "Rally@dashboard@123") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      window.alert("Wrong Credential");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center flex-col justify-center p-1 text-center`}
    >
      <img
        src={homeData.data.logoImg || "src"}
        alt="Logo"
        className={`w-48 rounded-md mb-2`}
      />
      <h1 className={`text-xl mb-2`}>
        Welcome To <span>{homeData.data.brandName}</span> Dashboard
      </h1>
      <div className="mt-4">
        <ul className="list-disc text-left">
          <li>{`Here Where You Can Add, Edit and Delete Your Exist Cars.`}</li>
          <li>{`One Thing More, You Have The Ability To Manage The Bookings Made On Your System.`}</li>
          <li>{`One Thing Is Required Please Identify Your Self .`}</li>
        </ul>
      </div>
      <form onSubmit={submitHandler}>
        <div className={`flex flex-col items-center justify-center mt-9`}>
          <label htmlFor="id">Type Here Your ID:</label>
          <Input
            input={{
              className: "rounded-lg p-1 mt-2 outline-none mt-4",
              id: "id",
              type: "password",
              value: pass,
              onChange: (e) => {
                setPass(e.target.value);
              },
            }}
          />
          <button
            style={inputStyle}
            className={`p-1 bg-transparent mt-2 rounded-lg`}
          >
            Submit
          </button>
        </div>
      </form>
      {isAuth && (
        <Link
          style={submitStyles}
          className={`flex items-center justify-center mt-2 px-4 py-1 rounded-lg text-2xl text-white`}
          to="/controls/deleteCars"
        >
          Start
        </Link>
      )}
    </div>
  );
};

export default Root;

export const rootLoader = async () => {
  const responseColors = await fetch(`${baseURL}/colors`);
  const responseHome = await fetch(`${baseURL}/home`);
  const dataColors = await responseColors.json();
  const dataHome = await responseHome.json();
  return { dataColors, dataHome };
};
