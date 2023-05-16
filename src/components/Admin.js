import React from "react";
import { ResponisveHeader } from "./ResponisveHeader";
import { DahboardSidebar } from "./DahboardSidebar";
import { Header } from "./Header";
// import { Profile } from "../pages/Profile";
import { Footer } from "./Footer";
import { Analytics } from "../pages/Analytics";
import { Providers, View } from "../pages/Providers";
import { Profile } from "../pages/Profile";

import { Route, Routes } from "react-router-dom";

export const Admin = () => {
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
            <Routes>
              <Route>
                <Route path="/" element={<Analytics />} />
                <Route path="/Profile" element={<Profile />} />
                

                <Route path="/view" element={<Providers />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};
