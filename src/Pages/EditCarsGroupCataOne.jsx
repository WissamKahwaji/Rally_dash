import React from "react";
import { baseURL } from "../API/baseURL";
import { Link, useLoaderData } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";

const EditCarsGroupCataOne = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(true);
  return (
    <PageContainer>
      <ul className={`grid grid-cols-3 gap-5`}>
        {data.data.categoryOneContent.map((ele) => (
          <li className={`h-[300px] `}>
            <Link to={ele._id} className={`h-full flex flex-col items-center`}>
              <img
                src={ele.img}
                alt={ele._id}
                className={`rounded-lg h-[80%] object-cover w-full`}
              />
              <p>{ele.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default EditCarsGroupCataOne;
export const editCarsGroupCataOneLoader = async () => {
  const response = await fetch(`${baseURL}/carPage`);
  const data = await response.json();
  console.log(data);
  return data;
};
