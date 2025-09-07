import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";

const RootLayout = () => {
  return (
    <>
      <div className="bg-slate-200">
        <Navbar></Navbar>
      </div>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
