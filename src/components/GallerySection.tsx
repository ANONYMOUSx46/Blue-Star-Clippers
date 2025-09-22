import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "@/assets/B&A1.jpg";
import beforeAfter2 from "@/assets/B&A2.jpg";
import beforeAfter3 from "@/assets/B&A3.jpg";

const galleryImages = [
  {
    id: 1,
    src: beforeAfter1,
    title: "Low-Fade",
    description: "Clean Low-Fade with precise line work"
  },
  {
    id: 2,
    src: beforeAfter2,
    title: "Buzz Cut/ Low Fade",
    description: "Fresh buzz cut for a clean, professional look"
  },
  {
    id: 3,
    src: beforeAfter3,
    title: "Mid-Fade",
    description: "Mid-Fade styling transformation"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].id);
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Before & After</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformations - every cut tells a story
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id}
              className="glass hover:glass-glow transition-all duration-300 hover:scale-105 border-glass-border/30 group cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <Button
                variant="glass"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="glass"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="glass"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image */}
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                className="max-w-full max-h-full rounded-lg glass border-glass-border/30"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryImages[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
