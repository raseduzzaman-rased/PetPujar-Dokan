import {
 createBrowserRouter,
 RouterProvider,
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/contact',
        Component: ContactUs,
      },
      {
        path: '/about',
        Component: AboutUs,
      },
    ],

  },

  
]);

export default router;