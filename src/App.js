import React from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "./Pages/Root";
import DeleteCars, {
  deleteCarAction,
  deleteCarsLoader,
} from "./Pages/DeleteCars";
import ControllerLay from "./Pages/ControllerLay/ControllerLay";
import AddACar from "./Pages/AddACar";
import AddCataOne, {
  addCataOneAction,
  addCataOneLoader,
} from "./Pages/AddCataOne";
import AddCataTwo, {
  addCataTwoAction,
  addCataTwoLoader,
} from "./Pages/AddCataTwo";
import EditACars from "./Pages/EditACars";
import EditCarsGroupCataOne, {
  editCarsGroupCataOneLoader,
} from "./Pages/EditCarsGroupCataOne";
import EditOneCar, {
  editOneCarAction,
  editOneCarLoader,
} from "./Pages/EditOneCar";
import EditCarsGroupCataTwo, {
  editCarsGroupCataTwoLoader,
} from "./Pages/EditCarsGroupCataTwo";
import AddCataTwoRates, {
  addCataTwoRatesAction,
} from "./Pages/AddCataTwoRates";
import AddCataOneRates, {
  addCataOneRatesAction,
} from "./Pages/AddCataOneRates";
import EditOneCarRates, {
  editOneCarRatesAction,
  editOneCarRatesLoader,
} from "./Pages/EditOneCarRates";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
    },
    {
      path: "/controls",
      element: <ControllerLay />,
      children: [
        {
          path: "/controls/deleteCars",
          element: <DeleteCars />,
          loader: deleteCarsLoader,
          action: deleteCarAction,
        },
        {
          path: "/controls/addACar",
          element: <AddACar />,
        },
        {
          path: "/controls/addACar/limoCar",
          element: <AddCataTwo />,
          loader: addCataTwoLoader,
          action: addCataTwoAction,
        },
        {
          path: "/controls/addACar/limoCar/:carId/rates",
          element: <AddCataTwoRates />,
          action: addCataTwoRatesAction,
        },
        {
          path: "/controls/addACar/rentalCar",
          element: <AddCataOne />,
          loader: addCataOneLoader,
          action: addCataOneAction,
        },
        {
          path: "/controls/addACar/rentalCar/:carId/rates",
          element: <AddCataOneRates />,
          action: addCataOneRatesAction,
        },
        {
          path: "/controls/editACars",
          element: <EditACars />,
        },
        {
          path: "/controls/editACars/rentalCar",
          element: <EditCarsGroupCataOne />,
          loader: editCarsGroupCataOneLoader,
        },
        {
          path: "/controls/editACars/rentalCar/:carId",
          element: <EditOneCar />,
          loader: editOneCarLoader,
          action: editOneCarAction,
        },
        {
          path: "/controls/editACars/rentalCar/:carId/rates",
          element: <EditOneCarRates />,
          loader: editOneCarRatesLoader,
          action: editOneCarRatesAction,
        },
        {
          path: "/controls/editACars/limoCar",
          element: <EditCarsGroupCataTwo />,
          loader: editCarsGroupCataTwoLoader,
        },
        {
          path: "/controls/editACars/limoCar/:carId",
          element: <EditOneCar />,
          loader: editOneCarLoader,
          action: editOneCarAction,
        },
        {
          path: "/controls/editACars/limoCar/:carId/rates",
          element: <EditOneCarRates />,
          loader: editOneCarRatesLoader,
          action: editOneCarRatesAction,
          // action: editOneCarAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
