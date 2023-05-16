import React from 'react'
import Sidbarmenu from './Sidbarmenu';

export const DahboardSidebar = () => {
  return (
    <div>
      <aside
        id="sidebar"
        className="bg-white w-[250px]  h-[100vh]  space-y-6 pt-6 px-0 absolute  transform md:relative  transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
      >
        <div className="flex flex-col space-y-6">
          <a href="/" className="flex text-center text-3xl px-8">
            <img
              src="../assets/dd-logo.svg"
              className="lg:w-[150px] w-[80px]"
            />
          </a>
          <aside className="m" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-5 rounded">
              <Sidbarmenu />
            </div>
          </aside>
        </div>
      </aside>
    </div>
  );
};
