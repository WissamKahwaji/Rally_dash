import API_ROUTES from "../../constants/apiRoutes";
import publicApiInstance from "../publicApiInstance";

const getBookings = async () => {
  const { data } = await publicApiInstance.get(API_ROUTES.BOOKINGS.GET);
  return data;
};
export { getBookings };
