import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";

const items = [
  { text: "Service / Capability", isOffer: false, actual: "General Service" },
  { text: "Custom One-Time Project", isOffer: false, actual: "Custom Work" },
  { text: "Fixed-scope D365 implementation package", isOffer: true, actual: "" },
  { text: "Variable Scope or Pricing", isOffer: false, actual: "Consulting Engagement" },
  { text: "Non-Repeatable Work", isOffer: false, actual: "One-Off Task" },
  { text: "Repeatable Power BI assessment", isOffer: true, actual: "" },
];

const StepNotAnOffer = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (idx: number, answer: boolean) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [idx]: answer }));
  };

  const allAnswered = Object.keys(answers).length === items.length;
  const score = items.filter((item, i) => answers[i] === item.isOffer).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-2">
        Is It an Offer?
      </h2>
      <p className="text-center text-muted-foreground mb-2 italic">
        If it changes every time, it's not an offer.
      </p>
      <p className="text-center text-sm text-muted-foreground mb-6">
        For each item below, decide: Is this an offer or not?
      </p>

      <div className="space-y-3 mb-6">
        {items.map((item, i) => {
          const answered = answers[i] !== undefined && answers[i] !== null;
          const correct = answered && answers[i] === item.isOffer;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                showResults
                  ? correct
                    ? "bg-success/10 border-success"
                    : "bg-destructive/10 border-destructive"
                  : answered
                  ? "bg-muted border-border"
                  : "bg-card border-border"
              }`}
            >
              <div className="flex-1">
                <span className="font-medium text-foreground">{item.text}</span>
                {showResults && !item.isOffer && (
                  <span className="block text-sm text-muted-foreground mt-1">
                    Actually: <span className="font-semibold">{item.actual}</span>
                  </span>
                )}
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleAnswer(i, true)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-heading font-semibold border transition-colors ${
                    answers[i] === true
                      ? "bg-success text-success-foreground border-success"
                      : "border-border text-muted-foreground hover:border-success hover:text-success"
                  }`}
                >
                  <Check className="w-4 h-4 inline mr-1" />
                  Offer
                </button>
                <button
                  onClick={() => handleAnswer(i, false)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-heading font-semibold border transition-colors ${
                    answers[i] === false
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "border-border text-muted-foreground hover:border-secondary hover:text-secondary"
                  }`}
                >
                  <X className="w-4 h-4 inline mr-1" />
                  Not
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {allAnswered && !showResults && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowResults(true)}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
          >
            Check Answers
          </button>
        </div>
      )}

      {showResults && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-6 p-4 bg-card rounded-xl border border-border"
        >
          <p className="text-xl font-heading font-bold text-primary">
            You scored {score}/{items.length}!
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            {score === items.length ? "Perfect! 🎉" : "Review the answers above to learn more."}
          </p>
        </motion.div>
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

export default StepNotAnOffer;
