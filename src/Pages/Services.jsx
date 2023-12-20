import React from "react";
import { Form, useLoaderData, redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";

import Input from "../Components/UI/Input";
import PageContainer from "../Components/UI/PageContainer";
import publicApiInstance from "../API/publicApiInstance";
import API_ROUTES from "../constants/apiRoutes";
import {
  useDeleteServiceMutation,
  useGetServices,
} from "../API/services/queries";
import privetApiInstance from "../API/privetApiInstance";

const Services = () => {
  const { data, isLoading, isError } = useGetServices();
  const colorsData = useSelector((state) => state.colorsSlice);
  const { mutate: deleteService } = useDeleteServiceMutation();

  const submitButtonStyle = {
    background: colorsData.data?.mainColor,
  };
  const handleDeleteService = ({ servicesId, serviceId, serviceName }) => {
    const confirm = window.confirm(
      `Are you sour you want to delete ${serviceName} service`
    );
    if (confirm) {
      deleteService({ servicesId, serviceId });
    }
  };
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <PageContainer>
      <h2 className={`text-center text-4xl `}>Services</h2>
      <Form
        method="post"
        className={`flex flex-col items-center`}
        encType="multipart/form-data"
      >
        <div className={`grid grid-cols-2 gap-5`}>
          <Input
            input={{
              title: "Page Heading",
              name: "pageHeading",
              type: "text",
              defaultValue: data.data.pageHeading,
            }}
          />{" "}
          <Input
            input={{
              title: "Arabic Page Heading ",
              name: "pageHeadingAr",
              type: "text",
              defaultValue: data.data.pageHeadingAr,
            }}
          />
        </div>
        <Input
          input={{
            title: "description Heading",
            name: "descHeading",
            type: "text",
            defaultValue: data.data.descHeading,
          }}
        />{" "}
        <Input
          input={{
            title: "Arabic description Heading ",
            name: "descHeadingAr",
            type: "text",
            defaultValue: data.data.descHeadingAr,
          }}
        />
        <input name="id" type="hidden" defaultValue={data.data._id} />
        <button
          style={submitButtonStyle}
          className={`mt-4 py-1 px-4 rounded-lg text-lg font-semibold`}
        >
          Submit
        </button>
      </Form>
      <div>
        <Link
          style={{
            border: `1px solid ${colorsData.data?.mainColor ?? "white"}`,
          }}
          className="py-2 px-4 rounded-md"
          to={`/controls/services/${data.data._id}/add-service`}
        >
          add service
        </Link>
      </div>
      <div className="grid grid-cols-1  mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.content.map((service) => (
          <div className=" flex flex-col gap-3">
            <div className="  relative  overflow-hidden">
              <img
                className="aspect-square w-full h-full object-cover"
                src={service.img}
                alt={service.title}
              />
              <div className=" absolute bg-black/60 p-12  top-1/2 left-1/2 rounded-sm -translate-y-1/2 -translate-x-1/2  flex gap-2 ">
                <Link
                  to={`/controls/services/${data.data._id}/edit-service/${service._id}`}
                  className="p-2 border hover:scale-105 transition-transform border-white rounded-sm"
                >
                  <MdEdit className="w-10    h-10" />
                </Link>

                <button
                  className="p-2 border border-red-500  hover:scale-105 transition-transform rounded-sm"
                  onClick={() =>
                    handleDeleteService({
                      servicesId: data.data._id,
                      serviceId: service._id,
                      serviceName: service.title,
                    })
                  }
                >
                  <MdDelete className="w-10 text-red-500    h-10" />
                </button>
              </div>
            </div>
            <p className="text-center">{service.title}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
export default Services;
export const servicesLoader = async () => {
  try {
    const { data } = await publicApiInstance.get(API_ROUTES.SERVICES.GET);
    return data;
  } catch (error) {
    return error;
  }
};
export const servicesAction = async ({ request }) => {
  const data = await request.formData();
  try {
    const res = privetApiInstance.put(API_ROUTES.SERVICES.EDIT(data.get("id")));
    return redirect("/controls/services");
  } catch (error) {
    return redirect("/controls/services");
  }
};
