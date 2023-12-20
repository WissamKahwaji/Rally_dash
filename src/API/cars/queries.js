import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addCarRate, deleteCareRate, editCarRate, getCars, getCar } from ".";

const useGetCarsQuery = () =>
  useQuery({ queryKey: ["get-cars"], queryFn: () => getCars() });
const useGetCarQuery = (id) =>
  useQuery({
    queryKey: ["get-car", id],
    queryFn: () => getCar(id),
    enabled: !!id,
    staleTime: 0,
  });
const useAddCarRateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-car-rate"],
    mutationFn: (payload) => addCarRate(payload),
    onSuccess: () => {
      toast.success("add rate successfully");
      queryClient.invalidateQueries({ queryKey: ["get-cars"] });
    },
    onError: () => {
      toast.error("failed to add rate");
    },
  });
};
const useEditCarRateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-car-rate"],
    mutationFn: (payload) => editCarRate(payload),
    onSuccess: () => {
      toast.success("edit rate successfully");
      queryClient.invalidateQueries({ queryKey: ["get-car"] });
    },
    onError: () => {
      toast.error("failed to edit rate");
    },
  });
};
const useDeleteCarRateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-car-rate"],
    mutationFn: (payload) => deleteCareRate(payload),
    onSuccess: () => {
      toast.success("delete rate successfully");
      queryClient.invalidateQueries({ queryKey: ["get-cars"] });
    },
    onError: () => {
      toast.error("failed to delete rate");
    },
  });
};
export {
  useGetCarsQuery,
  useGetCarQuery,
  useEditCarRateMutation,
  useAddCarRateMutation,
  useDeleteCarRateMutation,
};
