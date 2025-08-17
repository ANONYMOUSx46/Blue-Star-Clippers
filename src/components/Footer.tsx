import { Scissors, Star, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="glass glass-glow p-2 rounded-full">
                <Scissors className="w-5 h-5 text-accent" />
              </div>
              <Star className="w-4 h-4 text-brand-gold" />
              <span className="text-xl font-bold text-gradient">BLUE-STAR</span>
            </div>
            <p className="text-muted-foreground text-sm">
              "It's All in the Cut"<br />
              Decent barbering by Seth Pass
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Clean Cut</li>
              <li>Taper Fade</li>
              <li>Mid Fade</li>
              <li>High Fade</li>
              <li>Buzz Cut</li>
              <li>Shave</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="tel:+27 67 004 2448" 
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +27 67 006 2448
              </a>
              <a 
                href="https://wa.me/+27670062448" 
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href="https://github.com/ANONYMOUSx46" 
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Developer Github
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Blue-Star Clippers. All rights reserved. | Home barbering services by Seth Pass | Developed by Liam De Wet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;