import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "@/components/learning/ProgressBar";
import StepIntro from "@/components/learning/StepIntro";
import StepDefinition from "@/components/learning/StepDefinition";
import StepNotAnOffer from "@/components/learning/StepNotAnOffer";
import StepWhyMatters from "@/components/learning/StepWhyMatters";
import StepProcess from "@/components/learning/StepProcess";
import logo from "@/assets/stoneridge-logo-trans-white.png";

const stepLabels = ["Welcome", "Definition", "Quiz", "Why It Matters", "Process"];

const Index = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background flex items-start justify-center py-6 md:py-10 px-4">
      <div className="w-full max-w-4xl bg-card rounded-2xl border border-border shadow-lg p-6 md:p-10">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border bg-primary rounded-xl px-6 py-3">
          <img src={logo} alt="Stoneridge Software" className="h-10 md:h-12 w-auto" />
          <span className="text-sm font-heading font-medium text-primary-foreground hidden sm:block">
            Understanding Offers
          </span>
        </div>
        
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
