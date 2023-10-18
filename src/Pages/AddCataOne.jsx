import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Form, redirect, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
const AddCataOne = () => {
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
            }}
          />
          <Input
            input={{
              title: "Enter The Car Description",
              name: "desc",
              type: "text",
            }}
          />
          <Input
            input={{
              title: "Enter The Car Image",
              name: "img",
              type: "file",
            }}
          />
          <Input
            input={{
              name: "page_id",
              defaultValue: data.data._id,
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

export default AddCataOne;
export const addCataOneLoader = async () => {
  const response = await fetch(`${baseURL}/carPage`);
  const data = await response.json();
  return data;
};
export const addCataOneAction = async ({ request }) => {
  const data = await request.formData();
  const pageId = data.get("page_id");
  console.log(pageId);
  const response = await fetch(
    `${baseURL}/carPage/${pageId}/add-car-to-cat-one`,
    {
      method: "post",
      body: data,
    }
  );
  const r = await response.json();
  console.log(r);
  return redirect(`${r.data._id}/rates`);
};
