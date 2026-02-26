import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Galaktischer Konflikt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-gold mb-6 opacity-0 animate-fade-in text-glow-gold">
          Garry's Mod Roleplay Server
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}>
          <span className="text-glow-blue text-primary">DUEL</span>
          <span className="text-foreground"> OF THE </span>
          <span className="text-glow-red text-secondary">FORCE</span>
        </h1>
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 opacity-0 animate-fade-in font-light"
          style={{ animationDelay: "0.4s" }}>
          Wähle deinen Pfad. Forme die Galaxis.
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}>
          Tauche ein in einen epischen Sci-Fi-Rollenspielserver, inspiriert von galaktischen Konflikten.
          Zwei Orden. Ein Krieg. Deine Entscheidung.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}>
          <a
            href="#"
            className="px-8 py-4 font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground rounded-sm glow-blue hover:scale-105 transition-transform duration-300"
          >
            Discord beitreten
          </a>
          <a
            href="#"
            className="px-8 py-4 font-display text-sm tracking-widest uppercase bg-secondary text-secondary-foreground rounded-sm glow-red hover:scale-105 transition-transform duration-300"
          >
            Forum besuchen
          </a>
          <a
            href="#how-to-join"
            className="px-8 py-4 font-display text-sm tracking-widest uppercase border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-colors duration-300"
          >
            So startest du
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
