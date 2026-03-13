import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "@/components/learning/ProgressBar";
import StepIntro from "@/components/learning/StepIntro";
import StepDefinition from "@/components/learning/StepDefinition";
import StepNotAnOffer from "@/components/learning/StepNotAnOffer";
import StepWhyMatters from "@/components/learning/StepWhyMatters";
import StepProcess from "@/components/learning/StepProcess";
import logo from "@/assets/stoneridge_logo_blck.png";

const stepLabels = ["Welcome", "Definition", "Quiz", "Why It Matters", "Process"];

const Index = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ProgressBar currentStep={step} totalSteps={stepLabels.length} labels={stepLabels} />
        <AnimatePresence mode="wait">
          {step === 0 && <StepIntro key="intro" onNext={next} />}
          {step === 1 && <StepDefinition key="def" onNext={next} onPrev={prev} />}
          {step === 2 && <StepNotAnOffer key="not" onNext={next} onPrev={prev} />}
          {step === 3 && <StepWhyMatters key="why" onNext={next} onPrev={prev} />}
          {step === 4 && <StepProcess key="proc" onPrev={prev} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
