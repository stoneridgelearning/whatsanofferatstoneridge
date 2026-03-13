import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

const ProgressBar = ({ currentStep, totalSteps, labels }: ProgressBarProps) => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-2">
        {labels.map((label, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <motion.div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-heading font-bold border-2 transition-colors ${
                i < currentStep
                  ? "bg-secondary border-secondary text-secondary-foreground"
                  : i === currentStep
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-muted border-border text-muted-foreground"
              }`}
              animate={i === currentStep ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {i < currentStep ? "✓" : i + 1}
            </motion.div>
            <span className={`text-xs mt-1.5 font-heading font-medium text-center hidden sm:block ${
              i <= currentStep ? "text-primary" : "text-muted-foreground"
            }`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
        <motion.div
          className="h-full bg-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep) / (totalSteps - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
