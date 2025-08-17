import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready for your next cut? Contact Seth Pass directly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass glass-glow border-glass-border/30 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 glass glass-glow rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Phone</CardTitle>
                    <CardDescription>Call or text for bookings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+27670042448" 
                  className="text-xl font-semibold text-accent hover:text-brand-gold transition-colors"
                >
                  +27 67 004 2448
                </a>
              </CardContent>
            </Card>

            <Card className="glass glass-glow border-glass-border/30 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 glass glass-glow rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Location</CardTitle>
                    <CardDescription>Home-based barbering service</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Home studio<br />
                  <span className="text-accent">By appointment only</span>
                </p>
              </CardContent>
            </Card>

            <Card className="glass glass-glow border-glass-border/30 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 glass glass-glow rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Hours</CardTitle>
                    <CardDescription>Flexible scheduling available</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9AM - 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">8AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-accent">By appointment</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col justify-center">
            <Card className="glass glass-glow border-glass-border/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 glass glass-glow rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Quick Contact
                </CardTitle>
                <CardDescription>
                  Get in touch instantly via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  Chat directly with Seth Pass for instant booking and questions
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full text-lg py-6"
                  onClick={() => window.open('https://wa.me/+27670062448?text=Hi%20Seth,%20I%27d%20like%20to%20book%20an%20appointment', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Seth
                </Button>
                <p className="text-xs text-center text-muted-foreground/60">
                  Available during business hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;