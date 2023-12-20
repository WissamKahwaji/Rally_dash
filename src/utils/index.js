import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const createFormData = (data) => {
  const formData = new FormData();

  const appendToFormData = (obj, parentKey) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (
        typeof value === "object" &&
        value !== null &&
        !(value instanceof File)
      ) {
        appendToFormData(value, formKey);
      } else {
        formData.append(formKey, value);
      }
    });
  };

  appendToFormData(data);

  return formData;
};
