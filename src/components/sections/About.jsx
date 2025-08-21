import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { ABOUT, IMAGES } from '@/constants/content';

export function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {ABOUT.title}
            </h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-inner border border-primary/10">
              <p className="text-center text-2xl font-headline text-primary/80 mb-2">
                "{ABOUT.quote.tamil}"
              </p>
              <p className="text-center text-muted-foreground italic">
                — {ABOUT.quote.english}
              </p>
            </div>
            {ABOUT.story.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <Button asChild variant="link" className="group text-accent hover:text-accent-foreground p-0 h-auto text-base">
              <Link to="/tamil-culture">
                Explore Our Heritage <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <img 
              src={IMAGES.traditionalKitchen}
              alt="Traditional Tamil Kitchen" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}