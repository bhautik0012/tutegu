import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Logo() {
  return (
    <header>
      <div className="flex justify-between p-3 shadow-lg ">
        <div className="lg:w-[10%] sm:w-[100px]  mt-[6px] lg:ml-[100px] md:w-[130px] ">
          <img src="https://s3-alpha-sig.figma.com/img/a775/4287/edc31465c32ab5eb0704b4aa48f2e96b?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XUxJ9p818KhL76mj6eLkph2lFDmLCIN1UgyokEOA~r~Kyy3KObmEZC66PEsX1lSgRm7VPEDS8H4dZMVvuoe9h9xiI~QPAA56Bbzgo-Q1PQaKRe2WbM84pjX23WyolOSKegk67DmihJBSQ82mmV5XCDns7nfCZokkOeGQ88qmwRMm60OhccscvDGjuA01uPWuZWgqXOn5Qe86gUzXtME~lHySoNWhBSRmmzlj8WsRXSzRor7Znk-bYVzeXjL3mV8Qtx33rMKSqszYA6GeXAVgtqmZHO~SLo4hTLAhumYSfNg-REOUw5XqoiN7Srd4CB2Wc6ds6VXjfOuro17GaivTsg__" />
        </div>
        <div className="lg:items-center lg:flex md:flex md:items-center sm:hidden">
          <nav>
            <ul className="flex lg:gap-[48px] md:gap-[30px] justify-center md:ml-[40px] mt-[6px] ">
              <li>
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-all cursor-pointer hover:scale-110 hover:text-amber-500 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-all cursor-pointer hover:scale-110 hover:text-amber-500`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/advice"
                  className={({ isActive }) =>
                    `transition-all cursor-pointer hover:scale-110 hover:text-amber-500`
                  }
                >
                  Advice
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/seminar"
                  className={({ isActive }) =>
                    `transition-all cursor-pointer hover:scale-110 hover:text-amber-500`
                  }
                >
                  Seminar
                </NavLink>
              </li>

              
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `transition-all cursor-pointer hover:scale-110 hover:text-amber-500`
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ml-[60px] lg:mr-[115px] mt-[6px] flex transition-all cursor-pointer hover:scale-110">
            <button className="flex pt-[12px] pb-[12px] pl-[14px] pr-[17px] text-white border rounded-md bg-amber-600 w-[141px] justify-center">
              Get in touch
            </button>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:pt-[12px]">
            <img src="Group.png" />
        </div>
      </div>
    </header>
  );
}

export default Logo;
