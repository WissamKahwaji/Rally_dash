import API_ROUTES from "../../constants/apiRoutes";
import privetApiInstance from "../privetApiInstance";
import publicApiInstance from "../publicApiInstance";

const getCars = async () => {
  const { data } = await publicApiInstance.get(API_ROUTES.CARS.GET);
  return data;
};
const getCar = async (id) => {
  const { data } = await publicApiInstance.get(API_ROUTES.CARS.GET_CAR(id));
  return data;
};
const addCarRate = async ({ id, data }) => {
  const res = await privetApiInstance.post(
    API_ROUTES.CARS.ADD_CAR_RATE(id),
    data
  );
  return res.data;
};
const editCarRate = async ({ id, data }) => {
  const res = await privetApiInstance.put(
    API_ROUTES.CARS.EDIT_CAR_RATE(id),
    data
  );
  return res.data;
};
const deleteCareRate = async (payload) => {
  const res = await privetApiInstance.delete(
    API_ROUTES.CARS.DELETE_CAR_RATE(payload)
  );
  return res.data;
};
export { getCars, addCarRate, editCarRate, deleteCareRate, getCar };
