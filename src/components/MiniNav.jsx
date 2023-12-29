import {motion} from 'framer-motion';


function MiniNav({ step, setStep }) {
  function handleMoon() {
    if (step >= 1) {
      setStep((s) => s - 1);
    }
  }

  function handleMars() {
    if (step <= 2) {
      setStep((s) => s + 1);
    }

    if (step >= 2) {
      setStep((s) => s - 1);
    }
  }

  function handleEuropa() {
    if (step <= 3) {
      setStep((s) => s + 1);
    }

    if (step >= 3) {
      setStep((s) => s - 1);
    }
  }

  function handleTitan() {
    if (step <= 4) {
      setStep((s) => s + 1);
    }

    if (step >= 4) {
      setStep((s) => s - 1);
    }
  }

  return (
    <div className="text-base flex gap-[36px] justify-start items-center text-legacy-blue">
      <motion.button
      whileHover={{
        scale: 1.1,
        originX: 0,
      }}
      animate={{type: 'string' , stiffness: 300}}
        onClick={handleMoon}
        className={`${
          step === 1 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        MOON
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          originX: 0,
        }}
        animate={{type: 'string' , stiffness: 300}}
        onClick={handleMars}
        className={`${
          step === 2 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        MARS
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          originX: 0,
        }}
        animate={{type: 'string' , stiffness: 300}}
        onClick={handleEuropa}
        className={`${
          step === 3 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        EUROPA
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          originX: 0,
        }}
        animate={{type: 'string' , stiffness: 300}}
        onClick={handleTitan}
        className={`${
          step === 4 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        TITAN
      </motion.button>
    </div>
  );
}

export default MiniNav;
