import { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import {motion} from 'framer-motion';


const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    },
  }
}

function PageNav() {
  const [isOpen, setIsOpen] = useState(true);

  function openSide() {
    setIsOpen((is) => !is);
  }

  function closeSide() {
    setIsOpen((is) => is === false);
  }

  return (
    <>
      <div className="pt-6 sm:pt-0 lg:pt-10 pl-6 sm:pl-[39px] lg:pl-14 text-white flex justify-between items-center">
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
        variants={svgVariants} initial='hidden' animate='visible'
        ><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><motion.path variants={pathVariants}  fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></motion.svg>
        <button onClick={openSide}>
          <img
            className="block pr-6 sm:hidden"
            src="/shared/icon-hamburger.svg"
          />
        </button>
        <div className="hidden sm:block">
          <div className="w-[473px] h-0.5 text-white opacity-25"></div>
          <div className=" sm:w-[550px] lg:w-[830px] h-24 bg-white/10 text-base flex items-center justify-center sm:gap-[37px] lg:gap-[50px]">
            <NavLink 
              to="/"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive
                    ? "border-b-2 border-white py-9 sm:px-1 lg:px-1 sm:text-sm lg:text-base"
                    : "",
                  isTransitioning ? "transition delay-500" : "",
                ].join(" ")
              }
            >
              <span className="font-bold pr-[11px] sm:invisible lg:visible">
                00
              </span>
              HOME
            </NavLink>
            <NavLink 
              to="/destination"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive
                    ? "border-b-2 border-white py-9 px-1 sm:text-sm lg:text-base"
                    : "",
                  isTransitioning ? "transition-all delay-500 " : "",
                ].join(" ")
              }
            >
              <span className="font-bold pr-[11px] sm:invisible lg:visible">
                01
              </span>{" "}
              DESTINATION
            </NavLink>
            <NavLink
              to="/crew"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive
                    ? "border-b-2 border-white py-9 px-1 sm:text-sm lg:text-base"
                    : "",
                  isTransitioning ? "transition-all delay-700" : "",
                ].join(" ")
              }
            >
              <span className="font-bold pr-[11px] sm:invisible lg:visible">
                02
              </span>{" "}
              CREW
            </NavLink>
            <NavLink
              to="/technology"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive
                    ? "border-b-2 border-white py-9 px-1 sm:text-sm lg:text-base"
                    : "",
                  isTransitioning ? "transition-all delay-700" : "",
                ].join(" ")
              }
            >
              <span className="font-bold pr-[11px] sm:invisible lg:visible">
                03
              </span>
              TECHNOLOGY
            </NavLink>
          </div>
        </div>
      </div>

      {!isOpen && <SideBar isOpen={isOpen} closeSide={closeSide} />}
    </>
  );
}



export default PageNav;
