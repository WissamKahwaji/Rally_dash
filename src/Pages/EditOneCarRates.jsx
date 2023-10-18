import React from "react";
import Input from "../Components/UI/Input";
import PageContainer from "../Components/UI/PageContainer";
import { Form, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
import { wait } from "@testing-library/user-event/dist/utils";

const EditOneCarRates = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitButtonStyle = {
    background: colorsData.data.mainColor,
  };
  return (
    <PageContainer>
      <h2 className={`text-center text-4xl `}>Rates</h2>
      <Form
        method="post"
        className={`flex flex-col items-center`}
        encType="multipart/form-data"
      >
        <div className={`grid grid-cols-2 gap-5`}>
          <Input
            input={{
              title: "Daily",
              name: "daily",
              type: "text",
              defaultValue: data.data.daily,
            }}
          />
          <Input
            input={{
              title: "Weekly",
              name: "weekly",
              type: "text",
              defaultValue: data.data.weekly,
            }}
          />
          <Input
            input={{
              title: "Monthly",
              name: "monthly",
              type: "text",
              defaultValue: data.data.monthly,
            }}
          />
        </div>

        <button
          style={submitButtonStyle}
          className={`mt-4 py-1 px-4 rounded-lg text-lg font-semibold`}
        >
          Submit
        </button>
      </Form>
    </PageContainer>
  );
};

export default EditOneCarRates;
export const editOneCarRatesLoader = async ({ params }) => {
  const carId = params.carId;
  const response = await fetch(`${baseURL}/carPage/get-car-rate/${carId}`);
  const data = await response.json();
  return data;
};
export const editOneCarRatesAction = async ({ request, params }) => {
  const carId = params.carId;
  const data = await request.formData();
  const response = await fetch(`${baseURL}/carPage/edit-car-rate/${carId}`, {
    method: "put",
    body: data,
  });
  const r = await response.json()
  console.log(r)
  return null;
};
