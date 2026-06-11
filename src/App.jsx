import HeroReveal from "./components/HeroReveal";
import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Verification from "./components/Verification";
import LegendCards from "./components/LegendCards";
import Achievements from "./components/Achievements";
import BalloonGame from "./components/BalloonGame";
import CakeSection from "./components/CakeSection";
import SecretMessage from "./components/SecretMessage"
import FinalCelebration from "./components/FinalCelebration";;
import EndScreen from "./components/EndScreen";

function App() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return <BootScreen setStep={setStep} />;
  }

  if (step === 1) {
    return <Verification setStep={setStep} />;
  }
  if (step === 2) {
    return <HeroReveal setStep={setStep} />;
  }
  if(step === 3){
  return <LegendCards setStep={setStep}/>;
}
if (step === 4) {
  return <Achievements setStep={setStep}/>;
}
if (step === 5) {
  return <BalloonGame setStep={setStep}/>;
}
if (step === 6) {
  return <CakeSection  setStep={setStep}/>;
}
if (step === 7) {
  return <SecretMessage setStep={setStep} />;
}
if (step === 8) {
  return <FinalCelebration setStep={setStep} />;
}
if (step === 9) {
  return <EndScreen />;
}
}

export default App;