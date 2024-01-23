import { useQuery } from "@tanstack/react-query";
import { getBookings } from ".";
const useGetBookings = () =>
  useQuery({ queryKey: ["get-bookings"], queryFn: () => getBookings() });
export { useGetBookings };
