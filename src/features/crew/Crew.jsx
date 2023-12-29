import { useEffect, useState } from "react"
import PageNav from "../../components/PageNav"
import { motion } from "framer-motion"



const crewVariants = {
  hidden: {
    x: '-50vw'
  },
  visible: {
    x: 0,
    transition: {type: 'spring', delay: 0.1}
  }
}

const crewDetails = [
  {
    "name": "Douglas Hurley",
      "images": "/crew/image-douglas-hurley.png",
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": "/crew/image-mark-shuttleworth.png",
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": "/crew/image-victor-glover.png",
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": "/crew/image-anousheh-ansari.png",
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]



function Crew() {
 const [forward , setForward] = useState(1)


 const crew = 'Crew'

 useEffect(function () {
  document.title = `${crew}`
}, [])

 function handleOne() {
  if (forward >= 1) {
    setForward(s => s-1)
  }
 }
 
 function handleTwo() {
   if (forward <= 2) {
     setForward(s => s + 1)
   }
  
   if (forward >= 2) {
     setForward(s => s-1)
   }
 }

 function handleThree() {
   if (forward <= 3) {
     setForward(s => s + 1)
   }

   if (forward >= 3) {
     setForward(s => s-1)
   }
 }


 function handleFour() {
   if (forward <= 4) {
     setForward(s => s + 1)
   }

   if (forward >= 4) {
     setForward(s => s-1)
   }
 }

 
  return (
    <div className="h-full  relative overflow-hidden bg-cover bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop">
    <PageNav />
    <div className="flex flex-col lg:flex-row lg:gap-[81.43px]">
      <div  className="pt-6 sm:pt-10 lg:pt-[123px]  lg:pl-[167px]">
      <p className="uppercase text-white navfont font-normal text-base sm:text-xl lg:text-[28px] leading-[19.2px] sm:leading-6 lg:leading-[33.6px] pl-6 pr-6 lg:pl-0 lg:pr-0 sm:pl-[38.5px] text-center sm:text-start
      "><span className="font-bold text-white/25 pr-[28px]">02</span>Meet Your Crew</p> 
      {crewDetails.map(crew =>  <div  key={crew.name} className="pt-8 sm:pt-[60px] lg:pt-[154px] text-center lg:text-start">
        <motion.div variants={crewVariants} initial='hidden' animate='visible'>
        <p className="uppercase text-base sm:text-2xl lg:text-[32px] leading-[18.34px] sm:leading-[27.5px] lg:leading-[36.67px] text-opacity-50 text-white">{crew.role}</p>
        <h3 className="uppercase text-white text-2xl sm:text-[40px] lg:text-[56px] leading-[27.5px] sm:leading-[45.84px] lg:leading-[64.18px] pt-[15px]">{crew.name}</h3>
        <p className="lg:w-[444px] lg:h-[128px] text-[15px]  sm:text-base lg:text-lg leading-[25px] sm:leading-7 lg:leading-8 text-legacy-blue pt-[27px]">{crew.bio}</p>
        </motion.div>
        <div className="pt-[33px] sm:pt-[40px] lg:pt-[120px] pb-8 sm:pb-[40px] lg:pb-[94px] flex justify-center lg:justify-start gap-[24px]">
          <button onClick={handleOne} className={`${forward === 1 ?  'bg-white': 'bg-legal-stake'} w-[15px] h-[15px] rounded-full`}></button>
          <button onClick={handleTwo} className={`${forward === 2 ?  'bg-white': 'bg-legal-stake'} w-[15px] h-[15px] rounded-full`}></button>
          <button onClick={handleThree} className={`${forward === 3 ?  'bg-white': 'bg-legal-stake'} w-[15px] h-[15px] rounded-full`}></button>
          <button onClick={handleFour} className={`${forward === 4 ?  'bg-white': 'bg-legal-stake'} w-[15px] h-[15px] rounded-full`}></button>
        </div>
      </div> )[forward-1]}
      </div>
     {crewDetails.map(image =>  <div key={image.name} className="pt-16  sm:pt-[40px] lg:pt-[200px] inline-flex justify-center items-center ">
        <img className="sm:w-[456.37px] sm:h-[572px] lg:w-[568.07px] lg:h-[712px] w-[327px] h-[223px] object-contain " src={image.images} alt="douglas"/>
      </div> )[forward-1]}
    </div>
    </div>
  )
}

export default Crew
//className={`${step === 1 ? 'border-b-2 border-white py-2 px-1 text-white': ''} navfont//`}

//animate={{ x: -10 }}
      //      initial={{ x: -250 }}
         //   transition={{delay: 0.2, type: 'spring', stiffness: 5}}