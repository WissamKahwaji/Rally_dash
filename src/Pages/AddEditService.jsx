import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageContainer from "../Components/UI/PageContainer";
import TextField from "../Components/UI/TextField";
import FileInput from "../Components/UI/FileInput";
import {
  useAddServiceMutation,
  useEditServiceMutation,
  useGetServiceContent,
} from "../API/services/queries";

const AddEditService = () => {
  const { servicesId, serviceId } = useParams();
  const { data: serviceContent } = useGetServiceContent(serviceId);
  const { mutate: addService } = useAddServiceMutation();
  const { mutate: editService } = useEditServiceMutation();
  const {
    register,
    setValue,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: { title: "", desc: "", titleAr: "", descAr: "", img: null },
  });
  useEffect(() => {
    if (serviceContent) {
      setValue("title", serviceContent.data.title);
      setValue("titleAr", serviceContent.data.titleAr);
      setValue("desc", serviceContent.data.desc);
      setValue("descAr", serviceContent.data.descAr);
    }
  }, [serviceContent, setValue]);

  const onSubmit = (values) => {
    serviceId
      ? editService({ id: serviceId, data: values })
      : addService({ id: servicesId, data: values });
  };
  return (
    <PageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 flex-col">
          <TextField name={"title"} label={"Title"} register={register} />
          <TextField
            name={"titleAr"}
            label={"Arabic Title"}
            register={register}
          />
          <TextField name={"desc"} label={"Description"} register={register} />
          <TextField
            name={"descAr"}
            label={"Arabic Description"}
            register={register}
          />
          <FileInput
            setValue={setValue}
            label={"img"}
            name={"img"}
            imgSrc={serviceContent?.data.img ?? ""}
          />
          <button
            disabled={isSubmitting}
            className="p-2 border m-auto hover:scale-105 transition-transform border-white rounded-sm"
          >
            {" "}
            submit
          </button>
        </div>
      </form>
    </PageContainer>
  );
};

export default AddEditService;
