import { Star, Heart, Globe, Crown, Layers } from "lucide-react";

const reasons = [
  { icon: Star, title: "Ernsthaftes Projekt", desc: "Kein Spaß-Server. Duel of the Force ist ein ambitioniertes RP-Projekt mit klarer Vision und professioneller Umsetzung." },
  { icon: Heart, title: "Community-getrieben", desc: "Die Community steht im Zentrum. Ideen, Feedback und kreative Beiträge formen das Projekt aktiv mit." },
  { icon: Globe, title: "Immersive Welt", desc: "Ein tiefes, atmosphärisches Setting mit eigener Lore, Fraktionsgeschichte und lebendigem Universum." },
  { icon: Crown, title: "Führung & Storylines", desc: "Werde Anführer, schreibe Handlungsstränge oder gestalte das Schicksal deiner Fraktion." },
  { icon: Layers, title: "Langfristige Progression", desc: "Custom Content, stetige Weiterentwicklung und eine Welt, die mit ihren Spielern wächst." },
];

const WhyJoinSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Warum mitmachen
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Warum <span className="text-secondary text-glow-red">Duel of the Force</span>?
          </h2>
          <div className="w-24 h-px gradient-blue-red mx-auto" />
        </div>

        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="flex items-start gap-6 bg-card border border-border rounded-sm p-6 hover:border-gold/30 transition-colors duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-1 text-foreground">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
