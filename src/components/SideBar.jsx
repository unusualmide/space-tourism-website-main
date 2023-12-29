import { NavLink } from "react-router-dom";
import {motion } from "framer-motion";


function SideBar({closeSide}) {
  const variants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: '5%',
      opacity: 0,
      transition: {
         type: 'spring',
         stiffness: 120,
         mass: 0.4,
        ease: 'easeInOut',
      }
    }
  }


  return (
    <motion.div className="h-screen border-legal-stake backdrop-blur-lg w-[254px] absolute sidebar inset-y-0 right-0  visible sm:invisible z-20"
    variants={variants}
    initial='closed'
    animate= 'open'

    >
    <button onClick={closeSide} className="absolute left-[208.45px] top-[33.95px]">
      <img src="/shared/icon-close.svg" />
    </button>
    <div className="pt-[128.95px] pl-8 ">
      <div className="">
        <div className="flex flex-col items-start justify-start gap-8 text-base text-white ">
          <NavLink
            to="/"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "text-white" : "",
                isActive
                  ? "border-r-2 border-white py-[3px] pr-[160px] text-base"
                  : "",
                isTransitioning ? "transition delay-500" : "",
              ].join(" ")
            }
          >
            <span className="font-bold pr-[11px] ">
              00
            </span>{" "}
            HOME
          </NavLink>
          <NavLink
            to="/destination"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "text-white" : "",
                isActive
                  ? "border-r-2 border-white py-[3px] pr-[123px] text-base"
                  : "",
                isTransitioning ? "transition-all delay-500 " : "",
              ].join(" ")
            }
          >
            <span className="font-bold pr-[11px] ">
              01
            </span>
            DESTINATION
          </NavLink>
          <NavLink
            to="/crew"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "text-white" : "",
                isActive
                  ? "border-r-2 border-white py-[3px] pr-[159px] text-base"
                  : "",
                isTransitioning ? "transition-all delay-700" : "",
              ].join(" ")
            }
          >
            <span className="font-bold pr-[11px] ">
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
                  ? "border-r-2 border-white py-[3px] pr-[120px] text-base"
                  : "",
                isTransitioning ? "transition-all delay-700" : "",
              ].join(" ")
            }
          >
            <span className="font-bold pr-[11px]">
              03
            </span>
            TECHNOLOGY
          </NavLink>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default SideBar;
