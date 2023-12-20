import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Components/UI/dialog";
import PageContainer from "../Components/UI/PageContainer";
import { useDeleteCarRateMutation, useGetCarsQuery } from "../API/cars/queries";
import AddCarRateDialog from "../Components/pages/cars/addCarRate";
import { Link } from "react-router-dom";

const Cars = () => {
  const { data: cars, isLoading, isError } = useGetCarsQuery();
  const { mutate: deleteCarRate } = useDeleteCarRateMutation();
  const handleDeleteCarRate = (payload) => {
    deleteCarRate(payload);
  };
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <PageContainer>
      <h2 className={`text-center mb-4 text-4xl `}>Limo Cars</h2>
      <div className="grid grid-cols-1  mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.data.categoryTwoContent.map((car) => (
          <div className=" flex flex-col gap-3">
            <div className="  relative  overflow-hidden">
              <img
                className="aspect-square w-full h-full object-cover"
                src={car.img}
                alt={car.title}
              />
              <div className=" absolute bg-black/60 p-12  top-1/2 left-1/2 rounded-sm -translate-y-1/2 -translate-x-1/2   ">
                <p className="text-center mb-3 text-xl">Rates</p>
                <div className="flex gap-2">
                  <AddCarRateDialog carId={car._id} />
                  <Link
                    to={`/controls/cars/${car._id}`}
                    className="p-2 border  hover:scale-105 transition-transform rounded-sm"
                  >
                    <MdEdit className="w-10    h-10" />
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="p-2 border border-red-500  hover:scale-105 transition-transform rounded-sm">
                        <MdDelete className="w-10    h-10  text-red-500" />
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <div className="pt-4">
                        {car.carRate.map((rate) => (
                          <div
                            key={rate?._id}
                            className="flex justify-between items-center"
                          >
                            <p>{rate?.title}</p>
                            <button
                              onClick={() =>
                                handleDeleteCarRate({
                                  carId: car._id,
                                  rateId: rate._id,
                                })
                              }
                            >
                              <MdDelete className="text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <p className="text-center">{car.title}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Cars;
