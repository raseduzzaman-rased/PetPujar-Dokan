import {
 createBrowserRouter,
 RouterProvider,
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import ContactUs from "../Components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/contact',
        Component: ContactUs,
      },
    ],

  },

  
]);

export default router;