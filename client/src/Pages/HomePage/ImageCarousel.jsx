import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const images = [
  {
    src: "https://t3.ftcdn.net/jpg/05/77/15/42/360_F_577154228_0IYhXHBvV0MoaSIgKHNKvg3gXrFPy6k8.jpg",
    alt: "Placeholder 1",
    link: "https://example.com/1"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PuMAZlBYYHYqZi1qhD8T9GdpEFcqe_uKRA&s",
    alt: "Placeholder 2",
    link: "https://example.com/2"
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18acd369-ea44-471b-aeeb-9e6e8e3ed9d5/dfq5se8-6ecc8525-2f95-40c3-bcaa-35a4bf150073.png/v1/fill/w_970,h_647,q_80,strp/8k_ultra_hd___wallpaper___theming_arts_by_themingarts_dfq5se8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQ3IiwicGF0aCI6IlwvZlwvMThhY2QzNjktZWE0NC00NzFiLWFlZWItOWU2ZThlM2VkOWQ1XC9kZnE1c2U4LTZlY2M4NTI1LTJmOTUtNDBjMy1iY2FhLTM1YTRiZjE1MDA3My5wbmciLCJ3aWR0aCI6Ijw9OTcwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PItFhbXavyfwYuUGn37p8v30fHVh9NflcbjtYh4z584",
    alt: "Placeholder 3",
    link: "https://example.com/3"
  },
  {
    src: "https://wallpapers.com/images/featured/8k-e16w8b36gngra7a4.jpg",
    alt: "Placeholder 4",
    link: "https://example.com/4"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpvCj1joFcPCzNcYSL0YucXAa2hXJR2TdCA&s",
    alt: "Placeholder 5",
    link: "https://example.com/5"
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {images.map((image, index) => (
          <Card 
            key={index} 
            className="w-1/2 flex-shrink-0 m-2 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleClick(image.link)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-fit"
            />
          </Card>
        ))}
      </div>
      <Button 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ImageCarousel;