import React from 'react'

export const Footer = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#fff] py-4">
        <div className="px-[40px] mx-auto">
          <div className="footer-top">
            <div className="flex lg:flex-row justify-between items-center flex-col gap-4">
              {/* <div class="xl:flex-1 flex lg:justify-start justify-center">
        <a href="" class="text-white rounded-full py-2 bg-[#FF7F00] px-6  font-bold">
          Logout
        </a>
      </div> */}
      <div className="xl:flex-1 flex justify-center py-4">
                <img src='./assets/Group4.svg'></img>
              </div>
              <div className="xl:flex-1 flex justify-center">
                <ul className="flex sm:flex-row flex-col justify-center items-center">
                  <li className="mr-2 lg:text-[16px] text-[14px] text-black hover:text-[#FF7F00] hover:font-bold">
                    <a href>
                      Terms and Conditions&nbsp;&nbsp;<span className>||</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="lg:text-[16px] text-[14px] text-black hover:text-[#FF7F00] hover:font-bold"
                    >
                      &nbsp;&nbsp;FAQ's&nbsp;&nbsp;<span>||</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="lg:text-[16px] text-[14px] text-black hover:text-[#FF7F00] hover:font-bold"
                    >
                      &nbsp;&nbsp;Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="xl:flex-1 flex lg:justify-end justify-center items-center">
                <span className="flex">
                  <div className="text-[#0247FF]  flex mr-2 items-center justify-center  p-3">
                    <a href="#" className="cursor-pointer text-[24px]">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                  <div className="text-[#0247FF]  flex mr-2 items-center justify-center  p-3">
                    <a href="#" className="cursor-pointer text-[24px]">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </div>
                  <div className="text-[#0247FF]  flex mr-2 items-center justify-center  p-3">
                    <a href="#" className="cursor-pointer text-[24px]">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
