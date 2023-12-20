import API_ROUTES from "../../constants/apiRoutes";
import publicApiInstance from "../publicApiInstance";

const getInquiries = async () => {
  const { data } = await publicApiInstance.get(API_ROUTES.INQUIRIES.GET);
  return data;
};
export { getInquiries };
