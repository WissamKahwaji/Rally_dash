import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addService,
  deleteService,
  editService,
  getServiceContent,
  getServices,
} from ".";
import { toast } from "react-toastify";
const useGetServices = (id) =>
  useQuery({
    queryKey: ["get-services"],
    queryFn: () => getServices(),
  });
const useGetServiceContent = (id) =>
  useQuery({
    queryKey: ["get-service-content", id],
    queryFn: () => getServiceContent(id),
    enabled: !!id,
    staleTime: 0,
  });
const useAddServiceMutation = () =>
  useMutation({
    mutationKey: ["add-service"],
    mutationFn: (payload) => addService(payload),
    onSuccess: () => {
      toast.success("add service successfully");
    },
    onError: () => {
      toast.error("failed to add service");
    },
  });
const useEditServiceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-service"],
    mutationFn: (payload) => editService(payload),
    onSuccess: () => {
      toast.success("edit service successfully");
      queryClient.invalidateQueries({ queryKey: ["get-service-content"] });
    },
    onError: () => {
      toast.error("failed to edit service");
    },
  });
};
const useDeleteServiceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-service"],
    mutationFn: (payload) => deleteService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-services"] });
      toast.success(`delete ${data.data.title} success`);
    },
    onError: (data) => {
      toast.error(`failed to delete ${data.data.title}`);
    },
  });
};

export {
  useGetServiceContent,
  useAddServiceMutation,
  useEditServiceMutation,
  useDeleteServiceMutation,
  useGetServices,
};
