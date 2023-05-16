import React from 'react';

export const Analytics = () => {


const cards = [
  {
    id: 1,
    title: "Total Provider",
    subtitle: "528,658",
    image: "../assets/buyer.svg",
  },
  {
    id: 2,
    title: "Total Business / Agency",
    subtitle: "528,658",
    image: "../assets/briefcase.svg",
  },
  {
    id: 3,
    title: "Total User",
    subtitle: "528,658",
    image: "../assets/group.svg",
  },

];

  return (
    <div>
      <div className="bg-gradient-to-r from-[#E4E3E3] to-[#fff] rounded shadow-md lg:p-7 p-4 min-h-screen ">
        <div className="">
          <h2 className="text-[#0247FF] font-bold lg:text-[24px] text-[20px] font-bold">
            Analytics
          </h2>
          <div className="grid 2xl:gap-[50px] gap-8 mt-[40px] xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
            {cards.map((card) => (
              <div key={card.id}>
                <div className="shadow-xl cards-anlytics bg-white rounded-[20px]">
                  <div className="bg-[#0247FF] font-bold lg:text-[24px] text-[18px] text-white text-center py-[30px] rounded-t-[20px]">
                    {card.title}
                  </div>
                  <div className="flex justify-center items-center py-[30px] gap-8">
                    <img src={card.image} />
                    <p className="font-bold lg:text-[22px] text-[18px]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex md:flex-row flex-col gap-8 mt-10'>
          <div className='md:w-[65%] w-full'>
            <img src='./assets/Group2.svg'></img>
          </div>
          <div className='md:w-[30%] w-full p-5  bg-[#fff] shadow-md'>
          <p className='text-[20px] text-center font-bold'>Verification Pending</p>
          <div className="flex gap-8 items-center justify-center mt-10">
                <img src="./assets/Ellipse 69.svg" alt />
              <div>
              <h4 className="text-[18px] text-[#8C8A8A] font-bold">Camila</h4>
                <h4 className="text-[18px] text-[#8C8A8A]">Hartland, USA</h4>
              </div>
              </div>
              <div className="flex gap-8 items-center justify-center mt-6">
                <img src="./assets/Ellipse 69.svg" alt />
              <div>
              <h4 className="text-[18px] text-[#8C8A8A] font-bold">Camila</h4>
                <h4 className="text-[18px] text-[#8C8A8A]">Hartland, USA</h4>
              </div>
              </div>
              <div className="flex gap-8 items-center justify-center mt-6">
                <img src="./assets/Ellipse 69.svg" alt />
              <div>
              <h4 className="text-[18px] text-[#8C8A8A] font-bold">Camila</h4>
                <h4 className="text-[18px] text-[#8C8A8A]">Hartland, USA</h4>
              </div>
              </div>
              <div className="flex gap-8 items-center justify-center mt-6">
                <img src="./assets/Ellipse 69.svg" alt />
              <div>
              <h4 className="text-[18px] text-[#8C8A8A] font-bold">Camila</h4>
                <h4 className="text-[18px] text-[#8C8A8A]">Hartland, USA</h4>
              </div>
              </div>

          </div>


          </div>
        </div>
      </div>
    </div>
  );
}
