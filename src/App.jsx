import HeroReveal from "./components/HeroReveal";
import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Verification from "./components/Verification";
import LegendCards from "./components/LegendCards";
import Achievements from "./components/Achievements";
import BalloonGame from "./components/BalloonGame";
import CakeSection from "./components/CakeSection";
import SecretMessage from "./components/SecretMessage";
import FinalCelebration from "./components/FinalCelebration";
import EndScreen from "./components/EndScreen";
import FloatingParticles from "./components/FloatingParticles";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <FloatingParticles />

      {/* Music starts after verification */}
      {step >= 2 && <BackgroundMusic />}

      {step === 0 && <BootScreen setStep={setStep} />}
      {step === 1 && <Verification setStep={setStep} />}
      {step === 2 && <HeroReveal setStep={setStep} />}
      {step === 3 && <LegendCards setStep={setStep} />}
      {step === 4 && <Achievements setStep={setStep} />}
      {step === 5 && <BalloonGame setStep={setStep} />}
      {step === 6 && <CakeSection setStep={setStep} />}
      {step === 7 && <SecretMessage setStep={setStep} />}
      {step === 8 && <FinalCelebration setStep={setStep} />}
      {step === 9 && <EndScreen />}
    </>
  );
}

export default App;