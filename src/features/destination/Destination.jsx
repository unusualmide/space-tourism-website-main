import { useEffect, useState } from "react";
import MiniNav from "../../components/MiniNav";
import PageNav from "../../components/PageNav";
import { motion } from "framer-motion";


const containerVariant = {
  hidden: {
    opacity: 0,
    x: "9vw" ,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      stiffness: 120,
    }
  }
}

const childVariant = {
hover: {
  scale: 1.1,
 textShadow: '0px 0px 8px rgb(255, 255, 255)',
},

}


const details = [
  {
    name: "Moon",
    avgBalance: "384,400 KM",
    travelTime: "3 days",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    img: "/destination/image-moon.png",
  },
  {
    name: "Mars",
    avgBalance: "225 MIL. KM",
    travelTime: "9 months",
    description:
      "Don’t just wonder at the red planet from afar; take a trip to the Olympus Mons, the largest volcano in the solar system, in style. You’ll marvel at the Valles Marineris, a canyon system that makes the Grand Canyon look like a crack in the ground.",
    img: "/destination/image-mars.png",
  },
  {
    name: "Europa",
    avgBalance: "628 MIL. KM",
    travelTime: "3 years",
    description:
      "If you’re looking for a truly out of this world experience, you’ve found it. Europa is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet. It’s also the sixth-largest moon in the Solar System. Europa’s surface is smooth, with few surface features, such as craters and mountains, instead having a cracked, icy crust.",
    img: "/destination/image-europa.png",
  },
  {
    name: "Titan",
    avgBalance: "1.6 BIL. KM",
    travelTime: "7 years",
    description:
      "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found.",
    img: "/destination/image-titan.png",
  },
];

function Destination() {
  const [step, setStep] = useState(1);

  const destination = "Destination";

  useEffect(function () {
    document.title = `${destination}`;
  }, []);

  return (
    <div className="w-full h-full bg-cover bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop">
      <PageNav />
      <div className="flex  flex-col lg:flex-row pb-[112px] gap-[26px] sm:gap-[53px] lg:gap-[157px] justify-center items-center sm:justify-start">
        <div className="pt-[34px] sm:pt-[40px] lg:pt-[123px]  pl-6 pr-6 lg:pr-0 lg:pl-[167px] ">
          <motion.p
           variants={childVariant}
           whileHover='hover'
            className="uppercase text-white navfont font-normal text-base sm:text-xl lg:text-[28px] leading-[19.2px] sm:leading-6 lg:leading-[33.6px] sm:text-start text-center"
          >
            <span className="font-bold text-white/25 pr-[28px]">01</span>Pick
            Your Destination
          </motion.p>
          {
            details.map((image) => (
              <motion.img
              variants={childVariant}
              whileHover='hover'
             
                key={details.name}
                className="lg:pt-[120px] sm:pt-[60px] w-[170px] pt-8 sm:w-[300px] lg:w-[445px] inline-flex justify-center items-center"
                src={image.img}
                alt="image"
              />
            ))[step - 1]
          }
        </div>
        <div className="pt-0 lg:pt-[130px] flex lg:justify-start justify-center text-center lg:text-start lg:items-start items-center flex-col lg:w-[445px] lg:h-[472px]">
          <MiniNav step={step} setStep={setStep} />
          {
            details.map((detail) => (
              <motion.div
               variants={
                  containerVariant
               }
               initial="hidden"
                  animate="visible"
                key={detail.name}
                className="pt-[37px]"
              >
                <h2 className="uppercase text-[56px] leading-[64.18px] sm:text-[80px] lg:text-[100px] sm:leading-[91.68px] lg:leading-[114.6px] text-white ">
                  {detail.name}
                </h2>
                <p className="barlow text-[15px] leading-[25px] sm:leading-7 lg:leading-8 sm:text-base lg:text-lg text-legacy-blue border-b border-legacy-grey pb-8 sm:pb-[49px] lg:pb-[54px] sm:px-[98px] lg:px-0 px-0">
                  {detail.description}
                </p>
                <div className="pt-8 sm:pt-7 flex flex-col sm:flex-row justify-center lg:justify-start gap-[79px]">
                  <div className="inline-flex flex-col gap-3">
                    <p className="uppercase navfont text-sm leading-[16.8px text-legacy-blue">
                      avg. balance
                    </p>
                    <p className="text-[28px] leading-[32.09px] text-white">
                      {detail.avgBalance}
                    </p>
                  </div>
                  <div className="inline-flex flex-col gap-3">
                    <p className="uppercase navfont text-sm leading-[16.8px text-legacy-blue">
                      est. travel time
                    </p>
                    <p className="text-[28px] leading-[32.09px] text-white uppercase">
                      {detail.travelTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))[step - 1]
          }
        </div>
      </div>
    </div>
  );
}

export default Destination;
