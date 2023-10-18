import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Form, redirect, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";

const EditOneCar = () => {
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitButtonStyle = {
    background: colorsData.data.mainColor,
  };
  return (
    <PageContainer>
      <Form
        method="post"
        className={`flex flex-col items-center`}
        encType="multipart/form-data"
      >
        <div className={`grid grid-cols-2 gap-5`}>
          <Input
            input={{
              title: "Enter The Car Name",
              name: "title",
              type: "text",
              defaultValue: data.data.title,
            }}
          />
          <Input
            input={{
              title: "Enter The Car Description",
              name: "desc",
              type: "text",
              defaultValue: data.data.desc,
            }}
          />
          <Input
            input={{
              title: "Enter The Car Image",
              name: "img",
              type: "file",
              // defaultValue: data.data.im,
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

export default EditOneCar;
export const editOneCarLoader = async ({ params }) => {
  const carId = params.carId;
  const response = await fetch(`${baseURL}/carPage/get-car-by-id/${carId}`);
  const data = await response.json();
  return data;
};
export const editOneCarAction = async ({ request, params }) => {
  const carId = params.carId;
  const data = await request.formData();
  const response = await fetch(`${baseURL}/carPage/edit-car/${carId}`, {
    method: "put",
    body: data,
  });
  const r = await response.json();
  console.log(r);
  return redirect(`rates`);
};
