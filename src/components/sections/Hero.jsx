import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, HeartPulse, Baby, Sparkles } from 'lucide-react';
import { HERO, IMAGES } from '@/constants/content';

const iconMap = {
  HeartPulse,
  Baby,
  ShieldCheck,
  Sparkles
};

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      let charIndex = 0;
      let isDeleting = false;
      let timeoutId;

      const type = () => {
        const currentHeadline = HERO.headlines[headlineIndex];
        
        if (isDeleting) {
          if (charIndex > 0) {
            setTypedHeadline(currentHeadline.substring(0, charIndex - 1));
            charIndex--;
            timeoutId = setTimeout(type, 60);
          } else {
            isDeleting = false;
            setHeadlineIndex((prevIndex) => (prevIndex + 1) % HERO.headlines.length);
          }
        } else {
          if (charIndex < currentHeadline.length) {
            setTypedHeadline(currentHeadline.substring(0, charIndex + 1));
            charIndex++;
            timeoutId = setTimeout(type, 120);
          } else {
            timeoutId = setTimeout(() => {
              isDeleting = true;
              type();
            }, 2000); 
          }
        }
      };

      type();
      return () => clearTimeout(timeoutId);
    }
  }, [isMounted, headlineIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-secondary">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-5"></div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center relative z-10 gap-12">
        <div className="w-full text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-headline text-primary mb-4">
            Welcome to SARIRA Wellness
          </p>
          <h1 className="text-accent font-body mb-2 text-2xl h-8">
            <span>{typedHeadline}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {HERO.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              <Link to="/product">Try Fig Malt</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg">
              <Link to="/tamil-culture">Learn our story</Link>
            </Button>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white/40 rounded-xl p-6 shadow-lg border border-accent/30 mb-12 backdrop-blur-sm animate-floating transition-all duration-300 hover:shadow-xl">
              <p className="text-center text-lg font-semibold text-primary/90">
                {HERO.guarantee}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {HERO.benefits.map(benefit => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={benefit.text} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-accent bg-accent/10 p-3 rounded-full">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}