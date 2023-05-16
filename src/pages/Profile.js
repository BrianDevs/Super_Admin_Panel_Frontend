import React from "react";

export const Profile = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] lg:p-7 p-4 min-h-screen">
        <div className="orage-gradient boxshow lg:pb-[250px] rounded-[20px] shadow-md  lg:p-8 p-4">
          <h2 className="text-[#FF7F00] lg:tetx-[24px] text-[20px] font-bold">
            Admin Dashboard
          </h2>
          <div className="max-w-[1400px] lg:mt-[100px] mt-[40px] mx-auto ">
            <div className="flex lg:flex-row lg:mt-[60px] flex-col gap-6">
              <div className="flex-1 flex justify-center">
                <div className="bg-white gray-box px-8 py-[60px]  lg:min-w-[350px] sm:min-w-[300px] text-center rounded-[10px]">
                  <div className="flex">
                    <label className="relative mb-8 left-[50%] translate-x-[-50%] cursor-pointer">
                      <img
                        src="../assets/pp.svg"
                        className="lg:w-[100px] w-[80px] lg:h-[100px] w-[80px]"
                      />
                      <span className="mt-2 absolute lg:bottom-[-5px] lg:right-[-5px] bottom-0 right-0   flex justify-center items-center rounded-full text-base leading-normal">
                        <img src="../assets/camra.svg" className="h-[40px]" />
                      </span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>

                  <h2 className="mb-5 font-bold lg:text-[20px] text-[20px]">
                    Steve Alexzander
                  </h2>
                  <a
                    className="mb-5 inline-block font-[600]"
                    href="mailto:steve001@gmail.com"
                  >
                    steve001@gmail.com
                  </a>
                  <p className="font-[600]">PW- 0075412</p>
                </div>
              </div>
              <div className="flex-1">
                <form>
                  <h2 className="text-center font-bold mb-8 lg:text-[25px] text-[20px]">
                    Edit Profile
                  </h2>
                  <div className="mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        className=" pl-8 rounded-md bg-transparent border border-[#000000] text-gray-900 focus:ring-[#FF7F00]focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="Name"
                      />
                      <div className="absolute left-2 top-4">
                        <img src="../assets/user.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        className=" pl-8 rounded-md bg-transparent border border-[#000000] text-gray-900 focus:ring-[#FF7F00]focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="Email"
                      />
                      <div className="absolute left-2 top-4">
                        <img src="../assets/email.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        className=" pl-8 rounded-md bg-transparent border border-[#000000] text-gray-900 focus:ring-[#FF7F00]focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="Old Password"
                      />
                      <div className="absolute left-2 top-4">
                        <img src="../assets/lock.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        className=" pl-8 rounded-md bg-transparent border border-[#000000] text-gray-900 focus:ring-[#FF7F00]focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                        placeholder="New Password"
                      />
                      <div className="absolute left-2 top-4">
                        <img src="../assets/lock.svg" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FF7F00] font-bold text-white w-full p-3 rounded-md"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
