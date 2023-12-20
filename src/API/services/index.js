import API_ROUTES from "../../constants/apiRoutes";
import { createFormData } from "../../utils";
import privetApiInstance from "../privetApiInstance";
import publicApiInstance from "../publicApiInstance";

export const getServices = async (id) => {
  const { data } = await publicApiInstance.get(API_ROUTES.SERVICES.GET);
  return data;
};
export const getServiceContent = async (id) => {
  const { data } = await publicApiInstance.get(
    API_ROUTES.SERVICES.GET_CONTENT(id)
  );
  return data;
};
export const addService = async ({ id, data }) => {
  const formData = createFormData(data);
  const res = await privetApiInstance.post(
    API_ROUTES.SERVICES.ADD_CONTENT(id),
    formData
  );
  return res.data;
};
export const editService = async ({ id, data }) => {
  const formData = createFormData(data);
  const res = await privetApiInstance.put(
    API_ROUTES.SERVICES.EDIT_CONTENT(id),
    formData
  );
  return res.data;
};
export const deleteService = async (payload) => {
  console.log("error");
  const res = await privetApiInstance.delete(
    API_ROUTES.SERVICES.DELETE_CONTENT(payload)
  );
  return res.data;
};
