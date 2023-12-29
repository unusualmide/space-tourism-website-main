import { useEffect } from "react";
import {motion} from "framer-motion";
import PageNav from "../../components/PageNav";

function Home() {
  const home = "Home";

  useEffect(function () {
    document.title = `${home}`;
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-cover bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop">
      <PageNav />
      <motion.div  initial={{opacity: 0}} animate={{
      opacity: 1
  }} transition={{delay: 1.3, duration: 1.5}} className="pt-12 sm:pt-[106px] lg:pt-[298px] pl-6 sm:pl-[159px] lg:pl-[165px] pr-6 sm:pr-[159px] lg:pr-0  flex flex-col lg:flex-row gap-[81px] sm:gap-[156px] lg:gap-[391px] justify-center lg:justify-start items-center pb-[131px]">
        <div className="sm:w-[450px] w-[327px] h-[276px] sm:h-[334px] lg:h-[382px] text-center lg:text-start">
          <p  className="text-white uppercase navfont font-normal text-base sm:text-xl lg:text-[28px] leading-[19.2px] sm:leading-6 lg:leading-[33.6px]">
            so, you want to travel to
          </p>
          <h2  className="uppercase font-normal sm:text-[150px] sm:leading-[150px] lg:leading-[171.9px] text-legacy-blue text-[80px] leading-[100px]">
            space
          </h2>
          <p className="barlow leading-[25px] sm:leading-7 lg:leading-8 font-normal text-[15px] sm:text-base lg:text-[18px] text-white">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
         
        </div>
        <motion.div animate={{
          
        }} className="w-[150px] sm:w-[242px] lg:w-[274px] h-[150px] sm:h-[242px] lg:h-[274px] bg-white rounded-full inline-flex justify-center items-center">
          <p className="uppercase text-legacy-black text-xl sm:text-[32px] lg:text-2xl leading-[38.67px] font-normal">
            explore
          </p>

        </motion.div>
      </motion.div>
     
    </div>
  );
}

export default Home;
