import {
  Theater,
  Settings,
  Swords,
  TrendingUp,
  User,
  Calendar,
  Wrench,
  MessageSquare,
} from "lucide-react";

const features = [
  { icon: Theater, title: "Immersives Roleplay", desc: "Tiefgehendes, ernsthaftes RP in einem lebendigen Sci-Fi-Universum." },
  { icon: Settings, title: "Custom Systeme", desc: "Einzigartige Spielmechaniken, die speziell für unser Projekt entwickelt wurden." },
  { icon: Swords, title: "Fraktionskrieg", desc: "Strategische Konflikte zwischen Jedi und Sith mit echten Konsequenzen." },
  { icon: TrendingUp, title: "Progression & Ränge", desc: "Steige auf, erreiche neue Ränge und forme deinen eigenen Weg." },
  { icon: User, title: "Einzigartige Charaktere", desc: "Erschaffe einen Charakter mit eigener Geschichte, Motivation und Zielen." },
  { icon: Calendar, title: "Community-Events", desc: "Regelmäßige Events, Missionen und Story-Arcs mit echtem Einfluss." },
  { icon: Wrench, title: "Aktive Entwicklung", desc: "Ständige Updates, neue Inhalte und direkte Community-Einbindung." },
  { icon: MessageSquare, title: "Forum & Discord", desc: "Starke Community-Infrastruktur für Austausch, Planung und RP." },
];

const FeaturesSection = () => {
  return (
    <section className="section-spacing relative bg-surface">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Features
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Was dich <span className="text-primary text-glow-blue">erwartet</span>
          </h2>
          <div className="w-24 h-px gradient-blue-red mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:text-gold transition-colors duration-300" />
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
