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
      <button
        onClick={handleMoon}
        className={`${
          step === 1 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        MOON
      </button>
      <button
        onClick={handleMars}
        className={`${
          step === 2 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        MARS
      </button>
      <button
        onClick={handleEuropa}
        className={`${
          step === 3 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        EUROPA
      </button>
      <button
        onClick={handleTitan}
        className={`${
          step === 4 ? "border-b-2 border-white py-2 px-1 text-white" : ""
        } navfont`}
      >
        TITAN
      </button>
    </div>
  );
}

export default MiniNav;
