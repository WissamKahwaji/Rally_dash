import React from "react";
import { useSelector } from "react-redux";
import PageContainer from "../Components/UI/PageContainer";
import { useGetInquiries } from "../API/inquiries/queries";

const Inquiries = () => {
  const colorsData = useSelector((state) => state.colorSlice);
  const { data: inquiries, isLoading, isError } = useGetInquiries();
  const inquiryContainerStyle = {
    borderColor: colorsData?.data?.mainColor ?? "white",
  };
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <PageContainer>
      <h2 className={`text-center text-4xl mb-4 `}>Inquiries</h2>
      <div className="flex flex-col gap-8">
        {inquiries?.data.map((inquiry) => (
          <div
            style={inquiryContainerStyle}
            className=" flex flex-col border p-4 rounded-lg  gap-4"
            key={inquiry._id}
          >
            <div className="flex gap-2">
              <p className="capitalize">name:</p>
              <p>{inquiry.name}</p>{" "}
            </div>
            <div className="flex gap-2">
              <p className="capitalize">email:</p>
              <p>{inquiry.email}</p>{" "}
            </div>
            <div className="flex gap-2">
              <p className="capitalize">message:</p>
              <p>{inquiry.message}</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Inquiries;
