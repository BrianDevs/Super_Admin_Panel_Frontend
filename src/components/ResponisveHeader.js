import React from 'react'

export const ResponisveHeader = () => {


    
  return (
    <div>
      <input type="checkbox" id="menu-open" className="hidden" />
      <header
        className=" flex justify-end md:hidden"
        data-dev-hint="mobile menu bar"
      >
        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover: bg-white hover:bg-white rounded-md"
        >
          <svg
            id="menu-open-icon"
            className="cursor-pointer h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            className="cursor-pointer h-6 w-6 transition  duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>
    </div>
  );
}
