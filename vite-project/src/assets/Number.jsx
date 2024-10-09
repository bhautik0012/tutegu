import React from 'react'

function Number() {
  return (
    <div className="lg:flex justify-between lg:pt-[90px] md:pt-[50px]">
      <div className="lg:pl-[100px] md:pl-[60px] sm:pl-[50px]">
        <div className="flex lg:pt-[30px] sm:pt-[50px] ">
          <div>
            <p className="font-bold lg:text-[40px] md:text-[40px] sm:text-[30px] font-Satoshi">1000+</p>
            <p className="text-gray-400">Seminars and videos</p>
          </div>
          <div className="lg:pl-[108px] md:pl-[108px] sm:pl-[30px]">
            <p className="font-bold lg:text-[40px] md:text-[40px] sm:text-[30px] font-Satoshi">500+</p>
            <p className="text-gray-400">Students enrolled</p>
          </div>
        </div>
        <div className="flex lg:pt-[30px]  md:pt-[30px]">
          <div>
            <p className="font-bold lg:text-[40px] md:text-[40px] sm:text-[30px] font-Satoshi">6000+</p>
            <p className="text-gray-400">Advice session</p>
          </div>
          <div className="lg:pl-[130px] md:pl-[130px] sm:pl-[60px]">
            <p className="font-bold lg:text-[40px] md:text-[40px] sm:text-[30px] font-Satoshi">100%</p>
            <p className="text-gray-400">Satisfaction rate</p>
          </div>
        </div>
        <div className="border transition-all cursor-pointer hover:scale-110 bg-amber-600 w-[140px] rounded-md mt-[30px] ">
          <button className="text-white text-[14px] pr-[6px] pl-[22px] pt-[13px] pb-[10px]  ">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="lg:pr-[240px] md:pl-[35px] md:pt-[40px] sm:pt-[40px] lg:pt-[0px] sm:p-5 md:p-0 lg:p-0">
        <img className="w-[595px] h-[300px] object-cover rounded-lg" src="people.png" />
      </div>
    </div>
  )
}

export default Number