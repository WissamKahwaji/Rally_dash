import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAboutUsContent,
  getAboutUs,
  editAboutUs,
  addAboutUsContent,
  deleteAboutUsContent,
  editAboutUsContent,
} from ".";
import { toast } from "react-toastify";
const useGetAboutUs = () =>
  useQuery({
    queryKey: ["get-about-us"],
    queryFn: () => getAboutUs(),
  });
const useGetAboutUsContent = (id) =>
  useQuery({
    queryKey: ["get-about-us-content", id],
    queryFn: () => getAboutUsContent(id),
    enabled: !!id,
    staleTime: 0,
  });
const useEditAboutUsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-about-us"],
    mutationFn: (payload) => editAboutUs(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-about-us"] });
      toast.success("Edit about us successfully");
    },
    onError: () => {
      toast.error("Failed to edit about us");
    },
  });
};
const useAddAboutUsContentMutation = () =>
  useMutation({
    mutationKey: ["add-about-us-content"],
    mutationFn: (payload) => addAboutUsContent(payload),
  });
const useEditAboutUsContentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-about-us-content"],
    mutationFn: (payload) => editAboutUsContent(payload),
    onSuccess: () => {
      toast.success("edit content successfully");
      queryClient.invalidateQueries({ queryKey: ["get-about-us-content"] });
    },
    onError: () => {
      toast.error("failed to edit content");
    },
  });
};
const useDeleteAboutUsContentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-about-us-content"],
    mutationFn: (payload) => deleteAboutUsContent(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-about-us"] });
      toast.success(`delete ${data.data.title} success`);
    },
    onError: (data) => {
      toast.error(`failed to delete ${data.data.title}`);
    },
  });
};

export {
  useGetAboutUs,
  useGetAboutUsContent,
  useEditAboutUsMutation,
  useAddAboutUsContentMutation,
  useEditAboutUsContentMutation,
  useDeleteAboutUsContentMutation,
};
