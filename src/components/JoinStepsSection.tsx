const steps = [
  { number: "01", title: "Discord beitreten", desc: "Tritt unserem Discord-Server bei und stelle dich der Community vor." },
  { number: "02", title: "Informationen lesen", desc: "Lies die wichtigen Regeln, das Lore-Dokument und die Fraktionsübersichten." },
  { number: "03", title: "Forum besuchen", desc: "Registriere dich im Forum für Bewerbungen, Diskussionen und RP-Planung." },
  { number: "04", title: "Server verbinden", desc: "Verbinde dich mit dem Garry's Mod Server und erstelle deinen Charakter." },
  { number: "05", title: "Pfad wählen", desc: "Entscheide dich für den Jedi-Orden oder das Sith-Imperium und beginne deine Reise." },
];

const JoinStepsSection = () => {
  return (
    <section id="how-to-join" className="section-spacing relative bg-surface">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Einstieg
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            So wirst du <span className="text-gold text-glow-gold">Teil der Geschichte</span>
          </h2>
          <div className="w-24 h-px gradient-blue-red mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-gold to-secondary" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-start gap-6 pl-0">
                {/* Number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-sm bg-card border border-border flex items-center justify-center">
                  <span className="font-display text-sm md:text-base font-bold text-gold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinStepsSection;
