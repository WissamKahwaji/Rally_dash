import API_ROUTES from "../../constants/apiRoutes";
import { createFormData } from "../../utils";
import privetApiInstance from "../privetApiInstance";
import publicApiInstance from "../publicApiInstance";

export const getAboutUs = async () => {
  const { data } = await publicApiInstance.get(API_ROUTES.ABOUT_US.GET);
  return data;
};
export const getAboutUsContent = async (id) => {
  const { data } = await publicApiInstance.get(
    API_ROUTES.ABOUT_US.GET_CONTENT(id)
  );
  return data;
};
export const editAboutUs = async ({ id, data }) => {
  const res = await privetApiInstance.put(API_ROUTES.ABOUT_US.EDIT(id), data);
  return res.data;
};
export const addAboutUsContent = async (payload) => {
  const formData = createFormData(payload);
  const res = await privetApiInstance.post(
    API_ROUTES.ABOUT_US.ADD_CONTENT,
    formData
  );
  return res.data;
};
export const editAboutUsContent = async ({ id, data }) => {
  const formData = createFormData(data);
  const res = await privetApiInstance.put(
    API_ROUTES.ABOUT_US.EDIT_CONTENT(id),
    formData
  );
  return res.data;
};
export const deleteAboutUsContent = async (id) => {
  const res = await privetApiInstance.delete(
    API_ROUTES.ABOUT_US.DELETE_CONTENT(id)
  );
  return res.data;
};
