import { motion } from "framer-motion";
import { HelpCircle, CheckCircle, FileText, Clock, DollarSign } from "lucide-react";

const pillars = [
  { icon: HelpCircle, label: "Client Problem", color: "text-accent" },
  { icon: CheckCircle, label: "Fixed Scope", color: "text-success" },
  { icon: FileText, label: "Defined Deliverables", color: "text-primary" },
  { icon: Clock, label: "Consistent Timeline", color: "text-accent" },
  { icon: DollarSign, label: "Packaged Pricing", color: "text-success" },
];

const StepDefinition = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
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

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-default"
          >
            <p.icon className={`w-10 h-10 ${p.color} mb-2`} />
            <span className="text-sm font-heading font-semibold text-foreground text-center">
              {p.label}
            </span>
          </motion.div>
        ))}
      </div>

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
