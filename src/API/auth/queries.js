import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { singIn } from ".";
const useSignInMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (data) => singIn(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/controls/deleteCars");
    },
    onError: () => {
      toast.error("failed to sign in please enter current password");
    },
  });
};
export { useSignInMutation };
