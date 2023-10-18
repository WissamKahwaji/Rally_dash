import React from "react";
import Input from "../Components/UI/Input";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";
import { baseURL } from "../API/baseURL";

const AddCataTwoRates = () => {
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
            }}
          />
          <Input
            input={{
              title: "Weekly",
              name: "weekly",
              type: "text",
            }}
          />
          <Input
            input={{
              title: "Monthly",
              name: "monthly",
              type: "text",
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

export default AddCataTwoRates;
export const addCataTwoRatesAction = async ({ request, params }) => {
  const carId = await params.carId;
  const data = await request.formData();
  const response = await fetch(`${baseURL}/carPage/add-car-rate/${carId}`, {
    method: "post",
    body: data,
  });
  const r = await response.json();
  console.log(r);
  return null;
};
