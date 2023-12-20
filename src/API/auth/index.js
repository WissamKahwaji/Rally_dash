import API_ROUTES from "../../constants/apiRoutes";
import publicApiInstance from "../publicApiInstance";

const singIn = async (data) => {
  const res = await publicApiInstance.post(API_ROUTES.AUTH.SING_IN, data);
  return res.data;
};
export { singIn };
