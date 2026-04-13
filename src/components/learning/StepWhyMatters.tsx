import { motion } from "framer-motion";
import { Handshake, DollarSign, TrendingUp } from "lucide-react";

const teams = [
  {
    icon: Handshake,
    title: "Sales Teams",
    subtitle: "Position Solutions Clearly",
    description: "Sales can confidently present standardized offerings to clients, reducing ambiguity and closing deals faster.",
  },
  {
    icon: DollarSign,
    title: "Delivery Teams",
    subtitle: "Ensure Consistent Delivery",
    description: "Delivery teams follow proven blueprint, ensuring quality and predictability on every engagement.",
  },
  {
    icon: TrendingUp,
    title: "Organization",
    subtitle: "Drive Business Growth",
    description: "Repeatable offers scale efficiently, improving margins and creating predictable revenue streams.",
  },
];

const StepWhyMatters = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
        Why Understanding Offers Matters
      </h2>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {teams.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -4 }}
            className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <t.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">{t.title}</h3>
            <p className="text-sm font-semibold text-accent mb-3">{t.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Flow arrow */}
      <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
        <span className="text-sm font-heading font-medium">Sales</span>
        <span className="text-secondary">→</span>
        <span className="text-sm font-heading font-medium">Delivery</span>
        <span className="text-secondary">→</span>
        <span className="text-sm font-heading font-medium">Growth</span>
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

export default StepWhyMatters;
