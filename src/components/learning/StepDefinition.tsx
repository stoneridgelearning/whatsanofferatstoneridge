import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle, FileText, Clock, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: HelpCircle,
    label: "Client Problem",
    color: "text-accent",
    summary: "A clearly defined customer need or challenge that the offer is designed to solve.",
    detail: "The problem should be common enough that the same solution can be delivered to multiple clients.",
  },
  {
    icon: CheckCircle,
    label: "Fixed Scope",
    color: "text-success",
    summary: "A clearly defined set of activities and boundaries for the offer.",
    detail: "This ensures everyone understands what is included, what is not included, and prevents the work from expanding beyond the intended solution.",
  },
  {
    icon: FileText,
    label: "Defined Deliverables",
    color: "text-primary",
    summary: "Specific outputs or results the client will receive when the offer is delivered.",
    detail: "These deliverables are standardized so every client receives the same core outcomes.",
  },
  {
    icon: Clock,
    label: "Consistent Timeline",
    color: "text-accent",
    summary: "A predictable schedule for completing the offer.",
    detail: "Because the work is repeatable, the delivery timeframe can be estimated and managed consistently across clients.",
  },
  {
    icon: DollarSign,
    label: "Packaged Pricing",
    color: "text-success",
    summary: "A pre-defined pricing model for the offer.",
    detail: "Instead of creating custom pricing for every client, the offer has structured pricing based on its defined scope and deliverables.",
  },
];

const StepDefinition = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-3">
        Definition of an Offer
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-8">
        An offer is a clearly defined, repeatable way to solve a specific customer{" "}
        <span className="font-bold text-foreground">problem</span> across the organization.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
        {pillars.map((p, i) => (
          <motion.button
            key={p.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`flex flex-col items-center p-4 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all cursor-pointer ${
              selected === i ? "border-secondary ring-2 ring-secondary/30" : "border-border"
            }`}
          >
            <p.icon className={`w-10 h-10 ${p.color} mb-2`} />
            <span className="text-sm font-heading font-semibold text-foreground text-center">
              {p.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Definition panel */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-card rounded-xl border border-border shadow-sm mb-6">
              <div className="flex items-start gap-3">
                {(() => {
                  const Icon = pillars[selected].icon;
                  return <Icon className={`w-6 h-6 ${pillars[selected].color} shrink-0 mt-0.5`} />;
                })()}
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">
                    {pillars[selected].label}
                  </h3>
                  <p className="text-foreground font-medium mb-2">{pillars[selected].summary}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillars[selected].detail}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selected === null && (
        <p className="text-center text-sm text-muted-foreground mb-6">
          👆 Click a pillar above to learn more
        </p>
      )}

      <div className="flex justify-between">
        <button onClick={onPrev} className="px-6 py-2.5 border border-border rounded-lg font-heading font-medium text-muted-foreground hover:bg-muted transition-colors">
          ← Back
        </button>
        <button onClick={onNext} className="px-6 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
          Next →
        </button>
      </div>
    </motion.div>
  );
};

export default StepDefinition;
