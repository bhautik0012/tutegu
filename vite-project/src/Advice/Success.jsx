import React from 'react'
import { NavLink } from 'react-router-dom'

function Success() {
  return (
    <div>
        <div>
        <div className="lg:text-center mt-[100px] bg-amber-600 md:text-center sm:text-center sm:p-3" >
          <div className="text-white lg:text-[60px]  font-bold leading-none mb-[50px] pt-[50px]  md:text-[50px] sm:text-[34px]">
            <p>Contact us</p>
            
          </div>
          <div className="text-white pb-[30px]">
            <p>
            We're here to help. Contact us by <span className='underline underline-offset-4'>email</span> or 
            </p>
            <p>
            on 0800/tutegos (free from all networks).
            </p>
            
          </div>
          <div className="pb-[50px] font-semibold">
            <button className=" bg-white transition-all cursor-pointer hover:scale-110 text-amber-600 border rounded-lg text-[14px] pr-[25px] pl-[27px] pt-[10px] pb-[10px]">
           <NavLink to="/contact">Get in touch</NavLink> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success