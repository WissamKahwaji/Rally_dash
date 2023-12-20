import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdEdit, MdDelete } from "react-icons/md";
import PageContainer from "../Components/UI/PageContainer";

import {
  useDeleteAboutUsContentMutation,
  useGetAboutUs,
  useEditAboutUsMutation,
} from "../API/aboutUs/queries";
import { useForm } from "react-hook-form";
import TextField from "../Components/UI/TextField";
import SubmittingButton from "../Components/UI/SubmittingButton";

const AboutUs = () => {
  const { data, isLoading, isError } = useGetAboutUs();
  const colorsData = useSelector((state) => state.colorsSlice);
  const { mutate: deleteAboutUsContent } = useDeleteAboutUsContentMutation();
  const { mutate: editAboutUs } = useEditAboutUsMutation();
  const {
    formState: { isSubmitting },
    setValue,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      pageHeading: "",
      pageHeadingAr: "",
      descHeading: "",
      descHeadingAr: "",
      secondTitle: "",
      secondTitleAr: "",
    },
  });
  useEffect(() => {
    if (data) {
      setValue("pageHeading", data.data.pageHeading);
      setValue("pageHeadingAr", data.data.pageHeadingAr);
      setValue("descHeading", data.data.descHeading);
      setValue("descHeadingAr", data.data.descHeadingAr);
      setValue("secondTitle", data.data.secondTitle);
      setValue("secondTitleAr", data.data.secondTitleAr);
    }
  }, [data, setValue]);

  const handleDeleteAboutUsContent = ({ contentId, contentName }) => {
    const confirm = window.confirm(
      `Are you sour you want to delete ${contentName} content`
    );
    if (confirm) {
      deleteAboutUsContent(contentId);
    }
  };
  const onEditAboutUs = (values) => {
    editAboutUs({ id: data.data._id, data: values });
  };
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <PageContainer>
      <h2 className={`text-center text-4xl `}>About Us</h2>
      <form
        className={`flex flex-col gap-4 `}
        onSubmit={handleSubmit(onEditAboutUs)}
      >
        <TextField
          {...{
            label: "Page Heading",
            name: "pageHeading",
            type: "text",
            register: register,
          }}
        />{" "}
        <TextField
          {...{
            label: "Arabic Page Heading ",
            name: "pageHeadingAr",
            type: "text",
            register: register,
          }}
        />
        <TextField
          {...{
            label: "Second Title",
            name: "secondTitle",
            type: "text",
            register: register,
          }}
        />{" "}
        <TextField
          {...{
            label: "Arabic Second Title ",
            name: "secondTitleAr",
            type: "text",
            register: register,
          }}
        />
        <TextField
          {...{
            label: "description Heading",
            name: "descHeading",
            type: "text",
            register: register,
          }}
        />{" "}
        <TextField
          {...{
            label: "Arabic description Heading ",
            name: "descHeadingAr",
            type: "text",
            register: register,
          }}
        />
        <SubmittingButton isSubmitting={isSubmitting} />
      </form>
      <div>
        <Link
          style={{
            border: `1px solid ${colorsData.data?.mainColor ?? "white"}`,
          }}
          className="py-2 px-4 rounded-md"
          to={`/controls/about-us/add-content`}
        >
          add content
        </Link>
      </div>
      <div className="grid grid-cols-1  mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.content.map((content) => (
          <div className=" flex flex-col gap-3">
            <div className="  relative  overflow-hidden">
              <img
                className="aspect-square w-full h-full object-cover"
                src={content.img}
                alt={content.title}
              />
              <div className=" absolute bg-black/60 p-12  top-1/2 left-1/2 rounded-sm -translate-y-1/2 -translate-x-1/2  flex gap-2 ">
                <Link
                  to={`/controls/about-us/edit-content/${content._id}`}
                  className="p-2 border hover:scale-105 transition-transform border-white rounded-sm"
                >
                  <MdEdit className="w-10    h-10" />
                </Link>

                <button
                  className="p-2 border border-red-500  hover:scale-105 transition-transform rounded-sm"
                  onClick={() =>
                    handleDeleteAboutUsContent({
                      contentId: content._id,
                      contentName: content.title,
                    })
                  }
                >
                  <MdDelete className="w-10 text-red-500    h-10" />
                </button>
              </div>
            </div>
            <p className="text-center">{content.title}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
export default AboutUs;
