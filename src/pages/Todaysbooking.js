import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Todaysbooking = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <div className="">
          <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] rounded shadow-md px-10 py-5 ">
            <h1 className="text-[20px] text-[#0247FF] font-bold">
            Today’s Booking Details
            </h1>
          <div className="flex md:flex-row flex-col justify-between mt-10">
          <div className="bg-[#fff] p-5  shadow-md rounded-lg md:w-[47%] w-full">
          <div className=" flex flex-col">
          <img src="./assets/Ellipse 23.svg" className="mx-auto" alt />
          <h1 className="text-[20px] text-[#0247FF] text-center font-bold">Camila</h1>
              <p className="text-[16px] text-[#999696] text-center">Hartland, USA</p>
          </div>
          <div className="flex md:flex-row flex-col justify-between mt-5 border-t pt-3">
              <p className="text-[14px] text-[#999696]">Hartland, USA</p>
              <p className="text-[14px] flex gap-3 items-center text-[#999696]"><span><img src="./assets/Ellipse70.svg" alt /></span> active 2 hours ago</p>
            </div>
          </div>
          <div className="bg-[#fff] p-6  shadow-md rounded-lg md:w-[47%] w-full">
          <h3 className="text-[20px] font-bold ">My details</h3>
            <div className="flex justify-between mt-6 items-center border-y py-2">
              <h2 className="text-[16px]">Gender</h2>
              <h2 className="text-[16px]">Female</h2>
            </div>
            <div className="flex justify-between mt-5 items-center border-b pb-2">
              <h2 className="text-[16px]">Age</h2>
              <h2 className="text-[16px]">30</h2>
            </div>
            <div className="flex justify-between mt-5 items-center border-b pb-2">
              <h2 className="text-[16px]">Height</h2>
              <h2 className="text-[16px]">6’2”</h2>
            </div>
            <div className="flex justify-between mt-5 mb-5 items-center ">
              <h2 className="text-[16px]">Weight</h2>
              <h2 className="text-[16px]">55</h2>
            </div>
          </div>

          </div>
          <div className="bg-[#fff] p-6  shadow-md rounded-lg mt-5">
          <h3 className="text-[20px] font-bold pt-5">Today’s Booking Details</h3>
            <div className="flex justify-between mt-4 items-center border-t py-2">
              <h2 className="text-[16px]">Time</h2>
<form action="/action_page.php">
  <label className="pr-3" htmlFor="appt">10:00 PM</label>
  <input type="time" id="appt" name="appt" />
  <input className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] text-white rounded-full border border-[#05B7FD] ml-3  px-6 py-1 md:text-[16px] text-[12px] " type="submit" />
</form>

            </div>
            <div className="flex justify-between mt-3 items-center ">
              <h2 className="text-[16px]">Location</h2>
              <h2 className="text-[16px]">14855 Bear Valley Rd</h2>
            </div>
          </div>
          <div className="bg-[#fff] p-6  shadow-md rounded-lg mt-5">
          <h3 className="text-[18px] pt-5"><span className=" font-bold">Rates:</span> Companionship Rates (Select One)</h3>
            <div className="flex justify-between mt-4 items-center border-t py-2">
              <h2 className="text-[16px]">Total Amount</h2>
              <h2 className="text-[16px]">$1700</h2>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:w-[40%] w-full gap-8 mx-auto mt-10">
              <button className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] min-w-[220px] rounded-full text-white font-bold py-2  text-center" type="button">
                Accept
              </button>
              <button
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  className="bg-gradient-to-b from-[#FF5B5B] to-[#D90707] border-0 justify-center flex items-center border border-[#05B7FD] min-w-[220px] rounded-full text-white font-bold py-2 text-center"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                 Deny
                </button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Deny Booking ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Do you really want to Deny this booking?
                    </p>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-full outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Deny
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-full outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
     
    </div>
  );
};

export default Todaysbooking;
