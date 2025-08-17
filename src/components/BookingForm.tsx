import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, User, Phone, Scissors } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Clean Cut",
  "Taper Fade", 
  "Mid Fade",
  "High Fade",
  "Buzz Cut",
  "Shave"
];

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    service: "",
    location: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.surname || !formData.phone || !formData.service || !formData.location || !date) {
      toast({
        title: "Please fill in all fields",
        description: "All information is required to book your appointment.",
        variant: "destructive"
      });
      return;
    }

    // Create FormData object for Netlify
    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'booking-form');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('surname', formData.surname);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('date', date ? format(date, "yyyy-MM-dd") : '');

    try {
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          'form-name': 'booking-form',
          'name': formData.name,
          'surname': formData.surname,
          'phone': formData.phone,
          'service': formData.service,
          'location': formData.location,
          'date': date ? format(date, "yyyy-MM-dd") : ''
        }).toString()
      });

      if (response.ok) {
        const locationText = formData.location === "house-call" ? "house call" : "barber shop visit";
        toast({
          title: "Booking Request Sent! ✂️", 
          description: `Thanks ${formData.name}! We'll contact you soon with pricing and to confirm your ${formData.service} ${locationText}.`,
        });

        // Reset form
        setFormData({ name: "", surname: "", phone: "", service: "", location: "" });
        setDate(undefined);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Book Your Cut</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Schedule your appointment with Seth Pass
          </p>
        </div>

        <Card className="glass glass-glow border-glass-border/30 animate-fade-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 glass glass-glow rounded-full flex items-center justify-center">
              <Scissors className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-2xl text-foreground">
              Appointment Booking
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill in your details to book your next cut
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form name="booking-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="booking-form" />
              <input type="hidden" name="bot-field" />
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    First Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your first name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="glass border-glass-border/50 focus:ring-accent"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="surname" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Last Name
                  </Label>
                  <Input
                    id="surname"
                    name="surname"
                    placeholder="Enter your last name"
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    className="glass border-glass-border/50 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="glass border-glass-border/50 focus:ring-accent"
                  required
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground flex items-center gap-2">
                  <Scissors className="w-4 h-4" />
                  Haircut Type
                </Label>
              <Select name="service" onValueChange={(value) => handleInputChange("service", value)} required>
                  <SelectTrigger className="glass border-glass-border/50 focus:ring-accent">
                    <SelectValue placeholder="Select your preferred cut" />
                  </SelectTrigger>
                  <SelectContent className="glass border-glass-border/50">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Preference */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Service Location
                </Label>
              <Select name="location" onValueChange={(value) => handleInputChange("location", value)} required>
                  <SelectTrigger className="glass border-glass-border/50 focus:ring-accent">
                    <SelectValue placeholder="Choose your preference" />
                  </SelectTrigger>
                  <SelectContent className="glass border-glass-border/50">
                    <SelectItem value="house-call">House Call (I come to you)</SelectItem>
                    <SelectItem value="barber-shop">Visit Barber Shop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <Label className="text-foreground flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Preferred Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal glass border-glass-border/50",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 glass border-glass-border/50" align="start">
                    <input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ""} />
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full text-lg py-6"
              >
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
