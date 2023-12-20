import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
import { homeActions } from "../Store/homeSlice";
import { colorsActions } from "../Store/colorsSlice";
import { useForm } from "react-hook-form";
import TextField from "../Components/UI/TextField";
import SubmittingButton from "../Components/UI/SubmittingButton";
import { useSignInMutation } from "../API/auth/queries";

const Root = () => {
  const dispatch = useDispatch();
  const { dataColors, dataHome } = useLoaderData();
  const { mutate: singIn } = useSignInMutation();
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { password: "" },
  });
  dispatch(colorsActions.storeColors(dataColors));
  dispatch(homeActions.storeHome(dataHome));
  const colorsData = useSelector((state) => state.colorsSlice);
  const homeData = useSelector((state) => state.homeSlice);
  const inputStyle = {
    color: "white",
    backgroundColor: colorsData.data?.mainColor,
  };

  console.log(colorsData, homeData);

  const submitStyles = {
    backgroundColor: colorsData.data?.mainColor || "white",
  };

  const onSignIn = (values) => {
    singIn(values);
  };

  return (
    <div
      className={`min-h-screen flex items-center flex-col justify-center p-1 text-center`}
    >
      <img
        src={homeData.data?.logoImg || "src"}
        alt="Logo"
        className={`w-48 rounded-md mb-2`}
      />
      <h1 className={`text-xl mb-2`}>
        Welcome To <span>{homeData.data?.brandName}</span> Dashboard
      </h1>
      <div className="mt-4">
        <ul className="list-disc text-left">
          <li>{`Here Where You Can Add, Edit and Delete Your Exist Cars.`}</li>
          <li>{`One Thing More, You Have The Ability To Manage The Bookings Made On Your System.`}</li>
          <li>{`One Thing Is Required Please Identify Your Self .`}</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSignIn)}>
        <TextField
          register={register}
          name={"password"}
          label={"password"}
          type="password"
        />
        <SubmittingButton isSubmitting={isSubmitting} />
      </form>
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
