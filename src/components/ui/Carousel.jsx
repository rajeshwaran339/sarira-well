import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/utils/cn';

const Carousel = ({ 
  children, 
  className, 
  autoplay = false, 
  autoplayDelay = 5000,
  ...props 
}) => {
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, plugins);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className={cn("relative", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {children}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

const CarouselItem = ({ children, className }) => (
  <div className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}>
    {children}
  </div>
);

export { Carousel, CarouselItem };