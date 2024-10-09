import React from "react";

function Join() {
  return (
    <div>
      <div className="absolute ">
        <img
          className="h-[500px] object-cover lg:w-[1536px]  md:w-[900px] "
          src="https://images.pexels.com/photos/4240584/pexels-photo-4240584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
      <div className="text-black  text-[15px] flex gap-10 lg:ml-[100px]  sm:ml-[30px] sm:pt-[25px] absolute">
        <p>Home</p>
        <p>Seminars</p>
      </div>

      <div className="absolute text-black mt-[80px] lg:ml-[100px] sm:ml-[30px] ">
        <p className="lg:text-[60px] sm:text-[30px] md:text-[60px] font-bold pb-[20px]">Seminars</p>
        <p className="font-bold">
          An overview of all 246 seminars, training courses and workshops from
          tutego.
        </p>
        <p>
          You determine the content of a tutego training. Free yourself from the
          strict
        </p>
        <p>
          
          requirements of a public seminar. For example, combine the Java
          introductory
        </p>
        <p>
          
          course with a JSF seminar or a C# training with XSLT processing. Our
          course
        </p>
        <p className="">
          offerings can be freely combined. Fold and expand the categories and
          get to the
        </p>
        <p className="" >  seminars in a specific category.</p>
      </div>
      
      <div className="absolute bg-white border sm:pl-[10px]  sm:ml-[15px] sm:mr-[15px] lg:mt-[450px] lg:ml-[180px] md:ml-[80px] md:mt-[400px] sm:mt-[350px] sm:pt-[10px]">
        <div className="flex gap-32 p-8">
          <div className="gap-32 lg:flex">
            <div className="lg:ml-[80px]">
              <p className="font-bold">360 degree</p>
              <p className="text-gray-400">Career support</p>
            </div>
            <div className="md:pt-[20px] lg:pt-[0px]">
              <p className="font-bold">10+</p>
              <p className="text-gray-400">Programming languages and tools</p>
            </div>
          </div>
          <div className="gap-32 lg:flex">
            <div>
              <p className="font-bold">40+</p>
              <p className="text-gray-400">Seminars</p>
            </div>
            <div className="lg:mr-[80px]  md:pt-[20px] lg:pt-[0px]">
              <p className="font-bold">100%</p>
              <p className="text-gray-400">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Join;
