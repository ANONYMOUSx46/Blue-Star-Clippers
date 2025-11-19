import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Zap, TrendingUp, Circle, Star } from "lucide-react";

import barberBg1 from "@/assets/barber-bg-1.jpg";
import barberBg2 from "@/assets/barber-bg-2.jpg";

const services = [
  {
    name: "Clean Cut",
    description: "Complete hair removal for a fresh, clean look",
    icon: Scissors,
    backgroundImage: barberBg1,
    features: ["Full scalp shave", "Hot towel treatment", "Moisturizing finish"]
  },
  {
    name: "Taper Fade", 
    description: "Gradual length transition for a professional appearance",
    icon: Scissors,
    backgroundImage: barberBg2,
    features: ["Precision tapering", "Clean neckline", "Styled finish"]
  },
  {
    name: "Mid Fade",
    description: "Modern fade starting at the middle of the head", 
    icon: Scissors,
    backgroundImage: barberBg1,
    features: ["Expert blending", "Sharp lines", "Contemporary style"]
  },
  {
    name: "High Fade",
    description: "Bold, dramatic fade for maximum impact",
    icon: Scissors,
    backgroundImage: barberBg2,
    features: ["High contrast", "Precision cutting", "Distinctive look"]
  },
    {
    name: "Low Fade",
    description: "Stylish low fade with precise look",
    icon: Scissors,
    backgroundImage: barberBg2,
    features: ["Even length", "Low maintenance", "Timeless style"]
  },
  {
    name: "Buzz Cut",
    description: "Classic short cut with uniform length",
    icon: Scissors,
    backgroundImage: barberBg1,
    features: ["Even length", "Low maintenance", "Timeless style"]
  },
  {
    name: "Shave",
    description: "Traditional hot towel shave experience",
    icon: Scissors,
    backgroundImage: barberBg2,
    features: ["Hot towel prep", "Precision razor work", "Aftercare treatment"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cuts tailored to your style and personality
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className="relative glass hover:glass-glow transition-all duration-300 hover:scale-105 border-glass-border/30 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with Glassmorphism Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              <div className="absolute inset-0 glass" />
              
              <div className="relative z-10">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 glass glass-glow rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-semibold text-accent mb-4">
                    Contact for Pricing
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
