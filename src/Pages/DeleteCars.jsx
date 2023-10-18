import React from "react";
import { baseURL } from "../API/baseURL";
import { Form, useLoaderData } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";

const DeleteCars = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(true);
  return (
    <PageContainer>
      <ul className={`grid grid-cols-3 gap-5`}>
        {data.data.categoryOneContent
          .concat(data.data.categoryTwoContent)
          .map((ele) => (
            <li className={`h-[300px] flex flex-col items-center`}>
              <img
                src={ele.img}
                alt={ele._id}
                className={`rounded-lg h-[80%] object-cover w-full`}
              />
              <p>{ele.title}</p>
              <Form method="post">
                <input name="car_id" type="hidden" defaultValue={ele._id} />
                <input
                  name="page_id"
                  type="hidden"
                  defaultValue={data.data._id}
                />
                <button
                  className={`bg-red-600 text-lg px-4 py-1 rounded-lg mt-4`}
                >
                  Delete
                </button>
              </Form>
            </li>
          ))}
      </ul>
    </PageContainer>
  );
};

export default DeleteCars;
export const deleteCarsLoader = async () => {
  const response = await fetch(`${baseURL}/carPage`);
  const data = await response.json();
  return data;
};
export const deleteCarAction = async ({ request }) => {
  const data = await request.formData();
  const carId = data.get("car_id");
  const pageId = data.get("page_id");
  console.log(carId);
  const response = await fetch(
    `${baseURL}/carPage/${pageId}/delete-car/${carId}`,
    {
      method: "Delete",
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};
