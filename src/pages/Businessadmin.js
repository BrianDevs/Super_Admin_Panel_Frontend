import React from "react";
import { useState } from "react";

const Businessadmin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        <div className="">
          <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] px-10 py-5  rounded shadow-md">
            <h1 className="text-[20px] text-[#0247FF] font-bold">
              Privider Profile
            </h1>
            <div className=" p-6 mt-8 rounded">
              <div className="flex justify-between">
                <div className="md:w-[70%] w-full">
                  <div className="bg-[#fff] mt-5 p-5 rounded-lg shadow-md">
                    <div className="flex gap-8 items-center justify-center pb-4">
                      <img src="./assets/Ellipse 103.svg" alt />
                      <div className="text-center">
                        <h4 className="text-[18px] text-[#0247FF] font-bold">
                          Camila
                        </h4>
                        <h4 className="text-[18px] text-[#8C8A8A]">
                          Hartland, USA
                        </h4>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between border-t">
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
                  </div>
                  <div className="bg-[#fff] mt-5 p-5 rounded-lg shadow-md">
                    <h1 className="text-[20px] font-bold">Subscription</h1>
                    <div>
                      <img src="./assets/Group5.svg" className="mx-auto"></img>
                    </div>
                  </div>
                </div>
                <div className="md:w-[25%] w-full bg-[#fff] mt-5 p-5 rounded-lg shadow-md">
                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
                    </div>
                  </div>

                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center justify-center mt-6">
                    <img src="./assets/Ellipse 69.svg" alt />
                    <div>
                      <h4 className="text-[18px] text-[#8C8A8A] font-bold">
                        Camila
                      </h4>
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

export default Businessadmin;
