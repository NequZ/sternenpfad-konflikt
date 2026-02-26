const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold mb-3">
              <span className="text-primary">DUEL</span>{" "}
              <span className="text-foreground/70">OF THE</span>{" "}
              <span className="text-secondary">FORCE</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Ein SWTOR-inspiriertes Garry's Mod Roleplay-Projekt.
              Wähle deinen Pfad. Forme die Galaxis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Regelwerk
                </a>
              </li>
            </ul>
          </div>

          {/* Server */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Server
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Garry's Mod Server
                </a>
              </li>
              <li>
                <a href="#how-to-join" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  So startest du
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Duel of the Force — Ein Community-Projekt. Alle Rechte vorbehalten.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Dieses Projekt ist nicht mit LucasArts, EA oder BioWare verbunden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
