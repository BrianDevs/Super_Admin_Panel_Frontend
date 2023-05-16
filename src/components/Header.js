import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      {" "}
      <div className="flex px-4 lg:gap-6 gap-4 xl:flex-row flex-col items-center lg:justify-between justify-end bg-white py-4 lg:px-8 px-2 ">
        <div className>
          <form className="bg-[#F0F0F1] rounded-full h-[45px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium sr-only"
            >
              Search
            </label>
            <div className="relative lg:min-w-[335px] md:max-w-[250px] w-full max-w-[350px]">
              <input
                type="search"
                id="default-search"
                className="block h-[45px] w-full p-2 pr-4 pl-[55px] text-sm  border border-0 bg-[#F0F0F1] rounded-full focus:ring-[#3360E9] focus:border-[#FF7F00]"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>
        <div className="lg:flex-auto gap-6 flex justify-end items-center">
          <div>
            <a herf="" className="relative">
              <img className="" src="../assets/nn.svg" />
            </a>
          </div>
          <Link to="Profile" className="flex lg:items-center gap-2">
            <div>
              <img
                src="../assets/pp.svg"
                className="lg:w-[90px] h-[70px] w-[70px] lg:h-[90px] rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold lg:text-[20px] text-[16px]">
                Steve Alexzander
              </h2>
              <p className="lg:text-[18px] text-[14px] text-[#8C8A8A] font-bold">
                Super Admin
              </p>
            </div>
          </Link>
          <div>
            <Link
              to="/AdminLogin"
              className="flex text-black lg:block hidden items-center lg:text-[18px] text-[16px] font-bold"
            >
              <span title="Logout">
                <i className="fa-solid mr-2 text-[#0247FF] lg:text-[22px] text-[16px] fa-arrow-right-from-bracket" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
