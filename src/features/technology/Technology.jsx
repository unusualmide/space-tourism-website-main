import { useEffect, useState } from "react";
import PageNav from "../../components/PageNav";
import { motion } from "framer-motion";

const techDetails = [
  {
    name: "Launch vehicle",
    portrait: "/technology/image-launch-vehicle-portrait.jpg",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    portrait: "/technology/image-spaceport-portrait.jpg",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    portrait: "/technology/image-space-capsule-portrait.jpg",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  const techVariants = {
    hidden: {
      opacity: 0,
      y: '15vw',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 120,
      },
    },
    }

    const imageVariants = {
      hidden: {
        opacity: 0,
        x: '-8vw',
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          mass: 0.4,
          stiffness: 150,
        },
      }
    }



  const [front, setFront] = useState(1);

  const technology = "Technology";
  

 useEffect(function () {
  document.title = `${technology}`
}, [])




  function handleOne() {
    if (front >= 1) {
      setFront((s) => s - 1);
    }
  }

  function handleTwo() {
    if (front <= 2) {
      setFront((s) => s + 1);
    }

    if (front >= 2) {
      setFront((s) => s - 1);
    }
  }

  function handleThree() {
    if (front <= 3) {
      setFront((s) => s + 1);
    }

    if (front >= 3) {
      setFront((s) => s - 1);
    }
  }
  

  return (
    <div className="h-full bg-cover bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop relative overflow-hidden">
      <PageNav />
      <div className="pt-6 sm:pt-[40px] lg:pt-[123px] pl-0 sm:pl-[38.5px] lg:pl-[167px] pb-[81px] sm:pb-[97px] lg:pb-[101px]">
        <div className="">
          <p className="uppercase text-white navfont font-normal text-base sm:text-xl lg:text-[28px] leading-[19.2px] sm:leading-6 lg:leading-[33.6px] text-center sm:text-start">
            <span className="font-bold text-white/25 pr-[28px]">03</span>space
            launch 101
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-14 lg:gap-[108px] lg:pb-[100px]">
          <div
            className="flex flex-col lg:flex-row lg:pt-[137px] pt-[34px] sm:pt-14 
          gap-[80px]"
          >
            <div className="flex flex-row items-center justify-center gap-8 lg:flex-col">
              <button
                onClick={handleOne}
                className={`${
                  front === 1
                    ? "bg-white w-10 h-10 sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]   text-legacy-black"
                    : "bg-none w-10 h-10 sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]  border border-white/50 text-white"
                } rounded-full sm:text-2xl lg:text-[32px]  leading-[36.67px] text-center `}
              >
                1
              </button>
              <button
                onClick={handleTwo}
                className={`${
                  front === 2
                    ? "bg-white w-10 h-10 sm:h-[60px] sm:w-[60px] lg:w-[80px] lg:h-[80px] text-legacy-black"
                    : "bg-none w-10 h-10 sm:h-[60px] sm:w-[60px] lg:w-[80px] lg:h-[80px] border border-white/50 text-white"
                } rounded-full  sm:text-2xl lg:text-[32px] leading-[36.67px] text-center `}
              >
                2
              </button>
              <button
                onClick={handleThree}
                className={`${
                  front === 3
                    ? "bg-white w-10 h-10 sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]   text-legacy-black"
                    : "bg-none w-10 h-10 sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]  border border-white/50 text-white"
                } rounded-full sm:text-2xl lg:text-[32px]  leading-[36.67px] text-center `}
              >
                3
              </button>
            </div>
            {
              techDetails.map((detail) => (
                <motion.div variants={techVariants} initial='hidden' animate='visible' key={detail.name}>
                  <p className="uppercase text-[16px] leading-[19.2px] navfont font-normal text-legacy-blue text-center lg:text-start">
                    the technology...
                  </p>
                  <h3 className="text-white uppercase text-3xl sm:text-[40px] lg:text-[56px] leading-[64.18px] pt-[11px] text-center lg:text-start">
                    {detail.name}
                  </h3>
                  <p className="lg:w-[444px] lg:h-[192px] text-center lg:text-start lg:text-lg text-legacy-blue leading-8 barlow pt-[17px] text-[15px]  sm:text-base">
                    {detail.description}
                  </p>
                </motion.div>
              ))[front - 1]
            }
          </div>
          {
            techDetails.map((images) => (
              <motion.div
              variants={imageVariants}
              initial='hidden'
              animate='visible'
                key={images.name}
                className="pt-8 sm:pt-[60px] order-first lg:order-last"
              >
                <img src={images.portrait} alt="image-launch-vehicle" />
              </motion.div>
            ))[front - 1]
          }
        </div>
      </div>
    </div>


  );
}

export default Technology;
