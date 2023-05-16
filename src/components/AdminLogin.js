import React from 'react'
import { Link } from 'react-router-dom'


const AdminLogin = () => {
  return (
    <div>
       <div className='bg-gradient-to-r from-[#E4E3E3] to-[#fff] w-full h-[100vh]'>
     
    <div className="w-[85%] mx-auto pt-10">
 <a href="#"><img src="./assets/Group 350.svg" alt /></a>
 <div className=" p-5 mt-10">
   <div className="flex md:flex-row flex-col justify-between w-[90%] mx-auto py-[80px] items-center">
     <div className="md:w-[40%] w-full">
       <img src="./assets/Group 483.svg" alt />
     </div>
     <div className="md:w-[45%] w-full">
       <form className>
         <h2 className="text-[25px] font-bold py-4 text-center">
           Admin Login
         </h2>
         <div className="mb-6">
           <label className="relative block">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <img src="./assets/avatarB 4.svg" alt />
             </span>
             <input className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-black rounded py-2 pl-10 pr-4 " placeholder="Enter User ID" type="text" />
           </label>
         </div>
         <div className="mb-6">
           <label className="relative block">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <img src="./assets/padlock.svg" alt />
             </span>
             <input className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-black rounded py-2 pl-10 pr-4 " placeholder="Enter Password" type="text" />
           </label>
         </div>
         <div className="flex items-center justify-between">
           <div className="md:flex md:items-center">
             <label className="block text-gray-500 font-bold">
               <input className="leading-tight" type="checkbox" />
               <span className="text-sm "> Remember me </span>
             </label>
           </div>
           <Link className="inline-block align-baseline font-bold text-sm " to="/Forgotpassword">
             Forgot Password?
           </Link>
         </div>
         <div className="mt-6 mx-auto min-w-[240px]">
           <Link to="/Analytics" className="bg-[#0247FF] text-white text-center min-w-[240px] inline-block border border-[#05B7FD]  w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
             LogIn
           </Link>
         </div>
       </form>
     </div>
   </div>
 </div>
</div>
  </div>
    </div>
  )
}

export default AdminLogin
