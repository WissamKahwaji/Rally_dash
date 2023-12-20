import { useQuery } from "@tanstack/react-query";
import { getInquiries } from ".";
const useGetInquiries = () =>
  useQuery({ queryKey: ["get-inquiries"], queryFn: () => getInquiries() });
export { useGetInquiries };
