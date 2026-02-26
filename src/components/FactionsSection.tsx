import jediBg from "@/assets/jedi-bg.png";
import sithBg from "@/assets/sith-bg.png";

const factions = [
  {
    name: "Jedi-Orden",
    image: jediBg,
    color: "primary" as const,
    glowClass: "border-glow-blue",
    traits: ["Disziplin", "Ordnung", "Schutz", "Balance"],
    description:
      "Der Jedi-Orden steht für Weisheit, Selbstbeherrschung und den Schutz der Galaxis. Als Hüter des Gleichgewichts widmen sich die Jedi dem Dienst an der Gemeinschaft, der Ausbildung junger Talente und dem Kampf gegen die Dunkelheit.",
  },
  {
    name: "Sith-Imperium",
    image: sithBg,
    color: "secondary" as const,
    glowClass: "border-glow-red",
    traits: ["Macht", "Ambition", "Herrschaft", "Stärke"],
    description:
      "Das Sith-Imperium strebt nach absoluter Macht und Kontrolle. Angetrieben von Ehrgeiz und der dunklen Seite der Macht, verfolgen die Sith ihre Vision einer neuen Ordnung — geformt durch Stärke, Disziplin und unbändigen Willen.",
  },
];

const FactionsSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Die Fraktionen
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Zwei Orden. <span className="text-gold text-glow-gold">Ein Krieg.</span>
          </h2>
          <div className="w-24 h-px gradient-blue-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {factions.map((faction) => (
            <div
              key={faction.name}
              className={`relative overflow-hidden rounded-sm border ${faction.glowClass} group hover:scale-[1.02] transition-transform duration-500`}
            >
              {/* Image */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src={faction.image}
                  alt={faction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <h3 className={`absolute bottom-4 left-6 font-display text-2xl md:text-3xl font-bold ${
                  faction.color === "primary" ? "text-primary text-glow-blue" : "text-secondary text-glow-red"
                }`}>
                  {faction.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <p className="font-body text-foreground/80 text-sm leading-relaxed mb-4">
                  {faction.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {faction.traits.map((trait) => (
                    <span
                      key={trait}
                      className={`font-heading text-xs tracking-wider uppercase px-3 py-1 rounded-sm border ${
                        faction.color === "primary"
                          ? "border-primary/30 text-primary"
                          : "border-secondary/30 text-secondary"
                      }`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionsSection;
