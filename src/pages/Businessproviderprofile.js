import React from "react";
import { useState } from "react";

const Businessproviderprofile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        <div className="">
          <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] rounded shadow-md px-10 py-5 ">
            <h1 className="text-[20px] text-[#0247FF] font-bold">
             Business Privider Profile
            </h1>
            <div className=" p-6 mt-8 rounded">
              <div className="flex md:flex-row flex-col gap-10 justify-between px-10 mt-5">
                <div className="flex-1">
                  <div className="bg-[#fff] p-5 rounded-lg shadow-md">
                    <div className="flex gap-8 items-center justify-center ">
                      <img src="./assets/Ellipse 103.svg" alt />
                      <div>
                        <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                          Camila
                        </h4>
                        <h4 className="text-[18px] text-[#8C8A8A]">
                          Hartland, USA
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-between mt-5 border-t border-[#E4E3E3] pt-3">
                      <h1 className="text-[20px] font-bold">About me</h1>
                      <img src="./assets/document-editor 1.svg" alt />
                    </div>
                    <p className="text-[14px] text-[#838282] pt-5 text-justify ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </p>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between bg-[#fff] mt-5 p-3 rounded-lg shadow-md">
                    <div className="">
                      <h3 className="text-[18px] font-bold text-[#3360E9] pt-3">
                        Email
                      </h3>
                      <p className="text-[16px] pt-1">sugar@gmail.com</p>
                    </div>
                    <div className="">
                      <h3 className="text-[18px] font-bold text-[#3360E9] pt-3">
                        Phone
                      </h3>
                      <p className="text-[16px] pt-1">568 262 8628</p>
                    </div>
                    <div className="">
                      <h3 className="text-[18px] font-bold text-[#3360E9] pt-3">
                        WhatsApp
                      </h3>
                      <p className="text-[16px] pt-1">568 262 8628</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-5 p-5 rounded-lg shadow-md">
                    <h2 className="text-[20px] font-bold ">Interest</h2>
                    <div className="mt-5 flex md:flex-row flex-col gap-3 justify-between">
                      <button
                        className="bg-white border-2 border-[#0247FF] justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2 text-center"
                        type="button"
                      >
                        Movies
                      </button>
                      <button
                        className="bg-white border-2 border-[#0247FF] justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2 text-center"
                        type="button"
                      >
                        Music
                      </button>
                      <button
                        className="bg-white border-2 border-[#0247FF] justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2 text-center"
                        type="button"
                      >
                        Travel
                      </button>
                      <button
                        className="bg-white border-2 border-[#0247FF] justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2 text-center"
                        type="button"
                      >
                        Party
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#fff]  p-3 rounded-lg shadow-md">
                    <h3 className="text-[20px] font-bold ">My details</h3>
                    <div className="flex justify-between mt-4 items-center border-b pb-2">
                      <h2 className="text-[16px]">Gender</h2>
                      <h2 className="text-[16px]">Female</h2>
                    </div>
                    <div className="flex justify-between mt-3 items-center border-b pb-2">
                      <h2 className="text-[16px]">Age</h2>
                      <h2 className="text-[16px]">30</h2>
                    </div>
                    <div className="flex justify-between mt-3 items-center border-b pb-2">
                      <h2 className="text-[16px]">Height</h2>
                      <h2 className="text-[16px]">6’2”</h2>
                    </div>
                    <div className="flex justify-between mt-3 mb-10 items-center">
                      <h2 className="text-[16px]">Weight</h2>
                      <h2 className="text-[16px]">55</h2>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-5 p-3 rounded-lg shadow-md">
                    <h3 className="text-[18px] ">
                      <span className="font-bold">Emergency Contacts</span>
                    </h3>
                    <div className="flex justify-between mt-8 items-center border-b pb-2">
                      <h2 className="text-[16px]">Amy</h2>
                      <h2 className="text-[16px]">+12124567890</h2>
                    </div>
                    <div className="flex justify-between mt-4 items-center border-b pb-2">
                      <h2 className="text-[16px]">Marlin</h2>
                      <h2 className="text-[16px]">+25844567658</h2>
                    </div>
                    <div className="flex justify-between mt-4 items-center border-b pb-2">
                      <h2 className="text-[16px]">Blake</h2>
                      <h2 className="text-[16px]">+25844566554</h2>
                    </div>
                    <div className="flex justify-between mt-3 items-center border-b pb-2">
                      <h2 className="text-[16px]">Roberto</h2>
                      <h2 className="text-[16px]">+25844567658</h2>
                    </div>
                    <div className="flex justify-between mt-4 items-center border-b pb-2">
                      <h2 className="text-[16px]">Sugar</h2>
                      <h2 className="text-[16px]">+25844567658</h2>
                    </div>
                    <div className="flex justify-between my-4 items-center">
                      <h2 className="text-[16px]">Julian</h2>
                      <h2 className="text-[16px]">+25844567658</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="popup-modal"
                tabIndex={-1}
                className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                      <h2 className="text-[22px] font-bold">Are you sure?</h2>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Do you really want to delete this Profile?
                      </h3>
                      <div className="flex gap-8 mx-auto justify-center">
                        <button
                          data-modal-hide="popup-modal"
                          type="button"
                          className="text-white bg-gradient-to-b from-[#0198FE] to-[#0247FF] rounded-full border border-gray-200 text-sm font-medium px-16 py-2.5"
                        >
                          Cancel
                        </button>
                        <button
                          data-modal-hide="popup-modal"
                          type="button"
                          className="text-white bg-red-600 font-medium rounded-full text-sm inline-flex items-center px-16 py-2.5 text-center mr-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:w-[40%] w-full gap-8 mx-auto mt-10">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] border-2 border-[#0247FF] justify-center flex items-center border border-[#05B7FD] min-w-[220px] rounded-full text-white font-bold py-2 text-center"
                  type="button"
                >
                  Update Profile
                </button>
                <button
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  className="bg-gradient-to-b from-[#FF5B5B] to-[#D90707] border-0 justify-center flex items-center border border-[#05B7FD] min-w-[220px] rounded-full text-white font-bold py-2 text-center"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Delete Profile
                </button>
              </div>
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
                      Delete account ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Do you really want to delete this Profile?
                    </p>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-full outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
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

export default Businessproviderprofile;
