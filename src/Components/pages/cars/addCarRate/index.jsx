import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../UI/dialog";
import { MdAdd } from "react-icons/md";
import { useAddCarRateMutation } from "../../../../API/cars/queries";
import { useForm } from "react-hook-form";
import TextField from "../../../UI/TextField";
import SubmittingButton from "../../../UI/SubmittingButton";
const AddCarRateDialog = ({ carId }) => {
  const { mutate: addCarRate } = useAddCarRateMutation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      titleAr: "",
    },
  });
  const onAddRate = (values) => {
    addCarRate({ id: carId, data: { carRate: values } });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 border hover:scale-105 transition-transform rounded-sm">
          <MdAdd className="w-10    h-10  " />
        </button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit(onAddRate)}>
          <TextField register={register} name={"title"} label={"title"} />
          <TextField
            register={register}
            name={"titleAr"}
            label={"arabic title"}
          />
          <TextField register={register} name={"price"} label={"price"} />
          <SubmittingButton isSubmitting={isSubmitting} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCarRateDialog;
