import { motion } from "framer-motion";
import { Lightbulb, Package } from "lucide-react";

const StepIntro = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 mb-6">
        <Lightbulb className="w-12 h-12 text-secondary" />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
        What Is an Offer?
      </h2>
      <p className="text-lg text-muted-foreground mb-3">
        Understanding how Stoneridge packages and delivers{" "}
        <span className="text-secondary font-semibold italic">repeatable client solutions</span>.
      </p>
      <div className="flex items-center justify-center gap-3 my-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <Package className="w-8 h-8 text-accent shrink-0" />
        <p className="text-foreground text-lg font-medium">
          A repeatable solution to a specific client problem.
        </p>
      </div>
      <button
        onClick={onNext}
        className="mt-4 px-8 py-3 bg-secondary text-secondary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
      >
        Let's Learn More →
      </button>
    </motion.div>
  );
};

export default StepIntro;
