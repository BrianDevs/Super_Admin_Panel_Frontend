import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {

  return (
    <div>
      <div>
        <div className="">
          <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] rounded shadow-md px-10 py-5 ">
            <h1 className="text-[20px] text-[#0247FF] font-bold">
              Privider Profile
            </h1>
            <div className="flex md:flex-row flex-col justify-between mt-10">
        <div className="text-center md:w-[20%] w-full">
          <img src="./assets/Ellipse 83.svg" alt=''/>
          <h1 className="text-[20px]  font-bold pt-3">Camila</h1>
          <p className="text-[14px] ">Hartland, USA</p>
        </div>
        <div className="md:w-[40%] w-full">
          <img src="./assets/Group411.svg" className="w-full" alt=''/>
        </div>
        <div className="bg-[#fff] p-5  shadow-md rounded-lg md:w-[35%] w-full px-3 md:mt-0 mt-5">
          <h1 className="text-[20px] text-[#0247FF] font-bold">
            Panding Bookings
          </h1>
          <div className="flex justify-between gap-3 mt-3">
            <h4 className="md:text-[18px] text-[12px] ">Profile</h4>
            <h4 className="md:text-[18px] text-[12px] ">Name</h4>
            <h4 className="md:text-[18px] text-[12px] ">Time</h4>
            <h4 className="md:text-[18px] text-[12px] ">Details</h4>
          </div>
          <div className="flex justify-between gap-3 mt-3">
            <img src="./assets/Rectangle 271.svg" alt=''/>
            <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
            <h4 className="md:text-[18px] text-[12px] ">06:00 pm</h4>
            <Link to="/Todaysbooking" className="md:text-[18px] text-[12px] ">View</Link>
          </div>
          <div className="flex justify-between gap-3 mt-3">
            <img src="./assets/Rectangle 271.svg" alt=''/>
            <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
            <h4 className="md:text-[18px] text-[12px] ">09:00 pm</h4>
           <Link to="/Todaysbooking" className="md:text-[18px] text-[12px] ">View</Link>
          </div>
          <div className="flex justify-between gap-3 mt-3">
            <img src="./assets/Rectangle 271.svg" alt=''/>
            <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
            <h4 className="md:text-[18px] text-[12px] ">10:00 pm</h4>
           <Link to="/Todaysbooking" className="md:text-[18px] text-[12px] ">View</Link>
          </div>
          <div className="flex justify-between gap-3 mt-3">
            <img src="./assets/Rectangle 271.svg" alt=''/>
            <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
            <h4 className="md:text-[18px] text-[12px] ">01:00 pm</h4>
           <Link to="/Todaysbooking" className="md:text-[18px] text-[12px] ">View</Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-16">
        <div className="text-center">
          <h2 className="md:text-[18px] text-[12px] pb-3 text-center font-bold">
            Today’s Booking
          </h2>
          <div className="md:border-r border-0 bg-[#fff] p-5  shadow-md rounded-lg">
            <div className="flex gap-3 justify-between items-center mt-6">
              <img src="./assets/Ellipse 69.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <Link to="/Todaysbooking" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 70.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
             <Link to="/Todaysbooking" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 76.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
             <Link to="/Todaysbooking" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
          </div>
        </div>
        <div className="text-center md:mt-0 mt-8">
          <h2 className="md:text-[18px] text-[12px] pb-3 text-center font-bold">
            Upcoming Booking
          </h2>
          <div className="md:border-r border-0 bg-[#fff] p-5 shadow-md rounded-lg">
            <div className="flex gap-3 justify-between items-center mt-6">
              <img src="./assets/Ellipse 699.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <Link to="/Upcomingbookings" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 70.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <Link to="/Upcomingbookings" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 76.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <Link to="/Upcomingbookings" className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">View Details</Link>
            </div>
          </div>
        </div>
        <div className="text-center md:mt-0 mt-8">
          <h2 className="md:text-[18px] text-[12px] pb-3 text-center font-bold">
            Expired Booking
          </h2>
          <div className="md:border-r border-0 bg-[#fff] p-5 shadow-md rounded-lg ">
            <div className="flex gap-3 justify-between items-center mt-6">
              <img src="./assets/Ellipse 69.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <p className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">
                16 April, 2023
              </p>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 70.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <a className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">16 April, 2023</a>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 76.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <a className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]   px-6 py-1 md:text-[16px] text-[12px] ">16 April, 2023</a>
            </div>
          </div>
        </div>
        <div className="text-center md:mt-0 mt-8">
          <h2 className="md:text-[18px] text-[12px] pb-3 text-center font-bold">
            Rejected Booking
          </h2>
          <div className="md:border-r border-0 bg-[#fff] p-5 shadow-md rounded-lg">
            <div className="flex gap-3 justify-between items-center mt-6">
              <img src="./assets/Ellipse 69.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <p className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]  px-6 py-1 md:text-[16px] text-[12px]  ">
                16 April, 2023
              </p>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 70.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <p className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]  px-6 py-1 md:text-[16px] text-[12px]  ">
                16 April, 2023
              </p>
            </div>
            <div className="flex gap-3 justify-between items-center mt-3">
              <img src="./assets/Ellipse 76.svg" alt=''/>
              <h4 className="md:text-[18px] text-[12px] ">Camila</h4>
              <p className=" bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD]  px-6 py-1 md:text-[16px] text-[12px]  ">
                16 April, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Bookings;
