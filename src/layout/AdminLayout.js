import React from "react";

// import { Profile } from "../pages/Profile";
import { Analytics } from "../pages/Analytics";
import { View } from "../pages/Providers";
import { Profile } from "../pages/Profile";
import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ResponisveHeader } from "../components/ResponisveHeader";
import { DahboardSidebar } from "../components/DahboardSidebar";


export const AdminLayout = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        {/* open close sidebar */}
        <ResponisveHeader />
        {/* open close sidebar */}
        {/* sidbar start from here */}
        <DahboardSidebar />
       
        {/* sidbar start from close */}
        <div className="flex-auto lg:w-[85%] lg:w-[75%] md:w-[70%] w-full">
          <div className="flex flex-col">
            {/* header start */}
            <Header />

            <Outlet />
          </div>
        </div>
      </div>
      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};
