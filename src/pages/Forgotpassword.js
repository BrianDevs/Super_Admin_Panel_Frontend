import React from 'react'

const Forgotpassword = () => {
  return (
    <div className='bg-gradient-to-r from-[#E4E3E3] to-[#fff] w-full h-[100vh]'>
    <div className="w-[85%] mx-auto pt-10">
      <a href="dashboard.html"><img src="./assets/Group 350.svg" alt /></a>
      <div className=" p-5 mt-10">
        <div className="flex md:flex-row flex-col justify-between w-[90%] mx-auto py-[80px] items-center">
          <div className="md:w-[40%] w-full">
            <img src="./assets/Group 483.svg" alt />
          </div>
          <div className="md:w-[45%] w-full">
            <form className>
              <h2 className="text-[20px] text-white py-4 text-center">
                Forget Password
              </h2>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./assets/avatarB 4.svg" alt />
                  </span>
                  <input className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-black rounded py-2 pl-10 pr-4 text-white" placeholder="Email" type="text" />
                </label>
              </div>
              <div className="my-6 mx-auto min-w-[240px]">
                <button className="bg-[#0247FF] inline-block min-w-[240px] text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send OTP
                </button>
              </div>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./assets/padlock.svg" alt />
                  </span>
                  <input className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-black rounded py-2 pl-10 pr-4 text-white" placeholder="Enter OTP" type="text" />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                  
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./assets/padlock.svg" alt />
                  </span>
                  <input className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-black rounded py-2 pl-10 pr-4 text-white" placeholder="Enter Password" type="text" />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                   
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./assets/padlock.svg" alt />
                  </span>
                  <input className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-black rounded py-2 pl-10 pr-4 text-white" placeholder="Confirm Password" type="text" />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                   
                  </span>
                </label>
              </div>
              <div className="mt-6 mx-auto min-w-[240px]">
                <button className="bg-[#0247FF] inline-block min-w-[240px] text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Forgotpassword
