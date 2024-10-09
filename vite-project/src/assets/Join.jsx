import React from 'react'

function join() {
  return (
    <div className='lg:flex md:flex-none sm:flex-none'>
      <div className='lg:pt-[80px] sm:pt-[60px]  md:pt-[80px] lg:pl-[100px] md:pl-[70px] sm:pl-[20px]'>
        <p className="font-bold leading-none lg:text-[50px]  md:text-[50px] sm:text-[40px]">Join the revolution</p>
        <p className="font-bold leading-none lg:text-[50px]  md:text-[50px] sm:text-[40px]">of IT training and</p>
        <p className="font-bold leading-none lg:text-[50px]  md:text-[50px] sm:text-[40px]">redefine your skills</p>
      

      <div className='md:pt-[30px] lg:pt-[30px] sm:pt-[40px] '>
          <p className="text-gray-400">
            
            With a track record spanning more than two decades, we bring
            extensive
          </p>

          <p className="text-gray-400">
            experience to the table,offering corporate training, individual
            instruction,
          </p>

          <p className="text-gray-400">
            and workshops tailored for software developers and decision-makers.
          </p>
          <div className="lg:pt-[45px] md:pt-[35px] sm:pt-[30px] flex">
            <input
              type="text"
              placeholder="Search for a seminar"
              className=" h-[38px]  shadow-lg border w-[375px] outline-none "
            ></input>
            <button className="items-center transition-all cursor-pointer hover:scale-105 pt-[8px] pb-[8px] pl-[10px] pr-[10px] w-[118px] justify-center text-white border rounded-lg bg-amber-600">
              Search
            </button>
          </div>
          <p className="lg:pt-[25px] md:pt-[25px] sm:pt-[25px] text-gray-400">
            Popular searches:
            <span className="underline underline-offset-4">Java</span>,
            <span className="underline underline-offset-4">Database</span>,
            <span className="underline underline-offset-4">
              System administrator
            </span>
          </p>
          </div>
        </div>

        <div className='md:mt-[40px] lg:mt-[0px] sm:pr-[80px] sm:pt-[30px]'>
        <img className="lg:w-[800px] md:w-[600px] " src="man.png" />
      
      </div>

    </div>
  )
}

export default join