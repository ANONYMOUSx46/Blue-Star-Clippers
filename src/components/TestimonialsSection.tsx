import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Liam De Wet",
    service: "High Fade",
    text: "Seth's attention to detail is incredible. Best fade I've ever gotten! The glassmorphism setup adds such a professional touch.",
    rating: 5,
    avatar: "LD"
  },
  {
    name: "",
    service: "Taper Fade",
    text: "Professional service and great conversation. Seth really knows his craft. Always leave looking sharp and feeling confident.",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "",
    service: "Clean Cut",
    text: "Punctual, professional, and precise. Seth transformed my look completely. The home setup is comfortable.",
    rating: 5,
    avatar: "BF"
  },
  {
    name: "",
    service: "Mid Fade",
    text: "Quality cuts every time. Seth understands exactly what I want and delivers consistently. Highly recommend Blue-Star Clippers!",
    rating: 5,
    avatar: "JW"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Client Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What our clients say about their Blue-Star experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass glass-glow border-glass-border/30 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-accent/50" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass glass-glow rounded-full flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-accent">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;