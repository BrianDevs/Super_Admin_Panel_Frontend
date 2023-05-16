import React from "react";
import { Link } from "react-router-dom";

export const Useractivity = () => {
  const cards = [
    {
      id: 1,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 2,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 3,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 4,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 5,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 6,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 7,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 8,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
    {
      id: 9,
      username: "lorem ipsum",
      email: "ID:15862",
      review: "Bookings",
      image: "../assets/view.jpg",
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] rounded shadow-md lg:p-[40px] p-4">
        <div className="">
          <div className="flex md:flex-row flex-col justify-between">
            <div>
              {" "}
              <h2 className="text-[#0247FF] font-bold lg:text-[24px] text-[20px] font-bold">
                User Activity
              </h2>
            </div>
            <div className=" flex gap-5 items-center">
              <div>
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
              <div>
                <form action="/action_page.php">
                  <select
                    className="pr-10 pl-3 py-2 bg-[#fff] border-0 shadow-md rounded-lg"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">User Type</option>
                    <option value="saab">Service Provider</option>
                    <option value="opel">Agency Provider</option>
                    <option value="audi">Users</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="grid 2xl:gap-[50px] xl:gap-6 gap-6 mt-[40px] 2xl:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            {cards.map((card) => (
              <div key={card.id}>
                <div className="shadow-xl cards-anlytics  py-[40px] bg-white rounded-[20px]">
                  <div className="flex relative px-5 items-center  gap-6 lg:flex-row flex-col">
                    <div className="flex-1">
                      <img
                        src={card.image}
                        className="w-[100px] mx-auto h-[100px] rounded-full object-cover"
                      />
                    </div>
                    <div className=" flex-1 ">
                      <h3 className="lg:text-[20px] text-[18px] mb-2 font-bold">
                        {card.username}
                      </h3>
                      <p className="font-[600] lg:text-[16px] text-[15px]">
                        {card.email}
                      </p>
                      <Link
                        className="font-[600] text-[#0247FF] lg:text-[16px] text-[15px]"
                        to="/Bookings"
                      >
                        {card.review}
                      </Link>
                      <div>
                        <Link
                          to="/Chats"
                          className="font-[600]  inline-block  text-[#0247FF]"
                        >
                          Chat History
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
