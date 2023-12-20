import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEditCarRateMutation, useGetCarQuery } from "../API/cars/queries";
import PageContainer from "../Components/UI/PageContainer";
import TextField from "../Components/UI/TextField";
import SubmittingButton from "../Components/UI/SubmittingButton";

const Car = () => {
  const { id } = useParams();
  const colorsData = useSelector((state) => state.colorSlice);
  const { data: car, isLoading, isError } = useGetCarQuery(id);
  const { mutate: editCarRate } = useEditCarRateMutation();
  const rateContainerStyle = {
    borderColor: colorsData?.data?.mainColor ?? "white",
  };
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    setValue,
  } = useForm({ defaultValues: { updatedCarRates: [] } });
  useEffect(() => {
    if (car) {
      setValue("updatedCarRates", car.data.carRate);
    }
  }, [car, setValue]);
  const onEditCarRate = (values) => {
    editCarRate({ id, data: values });
  };
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <PageContainer>
      <img src={car.data.img} alt={car.title} />
      <p className="text-center my-4 text-2xl capitalize">rates</p>
      <form
        onSubmit={handleSubmit(onEditCarRate)}
        className="flex flex-col gap-8"
      >
        {car.data.carRate.map((rate, index) => (
          <div
            style={rateContainerStyle}
            className=" flex flex-col border p-4 rounded-lg  gap-4"
          >
            <TextField
              register={register}
              name={`updatedCarRates.${index}.title`}
              label={"title"}
            />
            <TextField
              register={register}
              name={`updatedCarRates.${index}.titleAr`}
              label={"arabic title"}
            />
            <TextField
              register={register}
              name={`updatedCarRates.${index}.price`}
              label={"price"}
            />
          </div>
        ))}
        <SubmittingButton isSubmitting={isSubmitting} />
      </form>
    </PageContainer>
  );
};

export default Car;
