import { Button } from "@/components/ui/button";
import { Scissors, Star } from "lucide-react";
import heroImage from "@/assets/hero-barber.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Brand Logo/Icon */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="glass glass-glow p-4 rounded-full">
            <Scissors className="w-8 h-8 text-accent" />
          </div>
          <Star className="w-6 h-6 text-brand-gold animate-glow" />
          <div className="glass glass-glow p-4 rounded-full">
            <Star className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">BLUE-STAR</span>
          <br />
          <span className="text-foreground">CLIPPERS</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
          "It's All in the Cut"
        </p>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Home tailored barbering services by Seth Pass. Experience precision cuts and styling in a comfortable environment.
        </p>
        
        {/* About Section */}
        <div id="about" className="mt-16 max-w-3xl mx-auto">
          <div className="glass glass-glow border-glass-border/30 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">About Seth Pass's Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-left space-y-4">
              <span>From humble beginnings in a garage, Blue-Star Clippers was born out of a dream, to redefine what it means to be a barber. This isnt just a brand; it's the foundation of a legacy in the making. I'm not just a young man with clippers in hand. I'm an artist with a vision, commited to transforming every haircut into a statement of confidence and style.</span>
              
              <span> At Blue-Star Clippers, the goal goes beyond grooming. I strive to deliver an experience that leaves every client feeling renewed, empowered, and seen. It's about precision, passion, and personal connection. Every fade, line-up, and trim is a step toward building something greater-not just for myself, but for everyone who walks through my door.</span>
              
              <span className="block font-semibold text-accent">This is the beginning of a legacy.</span>
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Appointment
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
