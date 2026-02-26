import { Shield, Swords, Users, Sparkles } from "lucide-react";

const highlights = [
  { icon: Swords, label: "Jedi vs. Sith Konflikt" },
  { icon: Shield, label: "Immersives Roleplay" },
  { icon: Sparkles, label: "Custom Systeme" },
  { icon: Users, label: "Community-Events" },
];

const AboutSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Über das Projekt
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Was ist <span className="text-primary text-glow-blue">Duel of the Force</span>?
          </h2>
          <div className="w-24 h-px gradient-blue-red mx-auto mb-8" />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
            <span className="text-gold font-semibold">Duel of the Force</span> ist ein ernsthaftes, 
            SWTOR-inspiriertes Garry's Mod Roleplay-Projekt. Im Zentrum steht der ewige Konflikt 
            zwischen dem <span className="text-primary">Jedi-Orden</span> und dem{" "}
            <span className="text-secondary">Sith-Imperium</span> — zwei Fraktionen mit 
            gegensätzlichen Idealen, die um die Zukunft der Galaxis kämpfen.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Erlebe tiefgehendes Charakterspiel, individuelle Progression, packende Events, 
            Konfliktzonen, Missionen und eine lebendige Story, die von der Community selbst 
            geformt wird. Ob du als weiser Hüter des Lichts oder als machthungriger Sith aufsteigst 
            — deine Entscheidungen schreiben Geschichte.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-sm p-6 text-center hover:border-primary/40 transition-colors duration-300 group"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-gold transition-colors duration-300" />
              <p className="font-heading text-sm font-semibold tracking-wide uppercase text-foreground/90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
