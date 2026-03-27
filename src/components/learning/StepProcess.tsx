import { motion } from "framer-motion";
import { MessageSquare, FileEdit, CheckCircle, BookOpen, Rocket } from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: MessageSquare, label: "Manager Discussion", num: 1, description: "Discuss your offer idea with your manager to get initial alignment, feedback, and guidance on next steps." },
  { icon: FileEdit, label: "Submit Offer Form", num: 2, description: "Obtain the offer submission form from your manager and complete it with all key details: scope, deliverables, pricing, and timeline." },
  { icon: CheckCircle, label: "Offer Committee Review & Approval", num: 3, description: "The offer committee evaluates the submission for market fit, feasibility, and strategic alignment, and approves or provides feedback." },
  { icon: BookOpen, label: "Offer Enablement", num: 4, description: "Final pricing, delivery readiness, playbooks, templates, and training materials are prepared to support the offer." },
  { icon: Rocket, label: "Go-To-Market Launch", num: 5, description: "The offer is officially launched with marketing collateral, sales enablement, and client-facing materials." },
];

const StepProcess = ({ onPrev }: { onPrev: () => void }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-3">
        Official Offer Process
      </h2>
      <p className="text-center text-muted-foreground mb-8 text-sm">Click each step to learn more</p>

      <div className="space-y-4 mb-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all ${
              activeStep === i
                ? "bg-primary text-primary-foreground border-primary shadow-lg"
                : "bg-card border-border hover:border-primary/40 hover:shadow-sm"
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-heading font-bold text-sm ${
              activeStep === i ? "bg-secondary text-secondary-foreground" : "bg-primary/10 text-primary"
            }`}>
              {s.num}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <s.icon className={`w-5 h-5 ${activeStep === i ? "text-secondary" : "text-accent"}`} />
                <span className="font-heading font-semibold text-lg">{s.label}</span>
              </div>
              {activeStep === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 text-sm opacity-90 leading-relaxed"
                >
                  {s.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-6 p-6 bg-card rounded-xl border border-border">
        <h3 className="font-heading font-bold text-primary text-xl mb-2">🎉 You've completed the learning!</h3>
        <p className="text-muted-foreground">
          Now you understand what an offer is, how to identify one, why it matters, and the process to create one.
        </p>
      </div>

      <div className="flex justify-between">
        <button onClick={onPrev} className="px-6 py-2.5 border border-border rounded-lg font-heading font-medium text-muted-foreground hover:bg-muted transition-colors">
          ← Back
        </button>
        <div className="flex gap-3">
          <button onClick={() => window.location.reload()} className="px-6 py-2.5 border border-border rounded-lg font-heading font-medium text-muted-foreground hover:bg-muted transition-colors">
            Start Over ↻
          </button>
          <button onClick={() => window.location.reload()} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
            Finish ✓
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StepProcess;
