import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageContainer from "../Components/UI/PageContainer";
import TextField from "../Components/UI/TextField";
import FileInput from "../Components/UI/FileInput";
import {
  useAddAboutUsContentMutation,
  useEditAboutUsContentMutation,
  useGetAboutUsContent,
} from "../API/aboutUs/queries";
import SubmittingButton from "../Components/UI/SubmittingButton";

const AddEditAboutUsContent = () => {
  const { id } = useParams();
  const { data: aboutUsContent } = useGetAboutUsContent(id);
  const { mutate: addAboutUsContent } = useAddAboutUsContentMutation();
  const { mutate: editAboutUsContent } = useEditAboutUsContentMutation();
  const {
    register,
    setValue,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      mainTitle: "",
      secTitle: "",
      desc: "",
      secTitleAr: "",
      descAr: "",
      img: null,
    },
  });
  useEffect(() => {
    if (aboutUsContent) {
      setValue("mainTitle", aboutUsContent.data.mainTitle);
      setValue("secTitle", aboutUsContent.data.secTitle);
      setValue("secTitleAr", aboutUsContent.data.secTitleAr);
      setValue("desc", aboutUsContent.data.desc);
      setValue("descAr", aboutUsContent.data.descAr);
    }
  }, [aboutUsContent, setValue]);

  const onSubmit = (values) => {
    id ? editAboutUsContent({ id, data: values }) : addAboutUsContent(values);
  };
  return (
    <PageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 flex-col">
          <TextField
            name={"mainTitle"}
            label={"Main Title"}
            register={register}
          />
          <TextField
            name={"secTitle"}
            label={"Second Title"}
            register={register}
          />
          <TextField
            name={"secTitleAr"}
            label={"Arabic Second Title"}
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
            imgSrc={aboutUsContent?.data.img ?? ""}
          />
          <SubmittingButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </PageContainer>
  );
};

export default AddEditAboutUsContent;
