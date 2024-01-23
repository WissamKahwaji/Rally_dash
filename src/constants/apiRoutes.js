const AUTH = {
  SING_IN: "/auth/signin",
};
const SERVICES = {
  GET: "/services",
  GET_CONTENT: id => `/services/service-content/${id}`,
  EDIT: id => `/services/edit-service/${id}`,
  ADD_CONTENT: id => `/services/${id}/add-service-content`,
  EDIT_CONTENT: id => `/services/edit-service-content/${id}`,
  DELETE_CONTENT: ({ servicesId, serviceId }) =>
    `services/${servicesId}/delete-service-content/${serviceId}`,
};
const ABOUT_US = {
  GET: "/about",
  EDIT: id => `/about/edit-about/${id}`,
  GET_CONTENT: id => `/about/about-content/${id}`,
  ADD_CONTENT: "/about/add-about-content",
  EDIT_CONTENT: id => `/about/edit-about-content/${id}`,
  DELETE_CONTENT: id => `about/delete-about-content/${id}`,
};
const CARS = {
  GET: "/carPage",
  GET_CAR: id => `/carPage/get-car-by-id/${id}`,
  ADD_CAR_RATE: id => `/carPage/${id}/add-car-rate`,
  EDIT_CAR_RATE: id => `/carPage/${id}/edit-car-rate`,
  DELETE_CAR_RATE: ({ carId, rateId }) =>
    `/carPage/${carId}/delete-car-rate/${rateId}`,
};

const INQUIRIES = {
  GET: "/enquiry/user-enquiries",
};

const BOOKINGS = {
  GET: "/bookings/all",
};

const API_ROUTES = {
  AUTH,
  SERVICES,
  ABOUT_US,
  INQUIRIES,
  CARS,
  BOOKINGS,
};
export default API_ROUTES;
