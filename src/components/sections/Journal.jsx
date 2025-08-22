import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import { JOURNAL } from '@/constants/content';

export function Journal() {
  return (
    <section id="journal" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {JOURNAL.title}
          </h2>
          <p className="text-xl text-muted-foreground">{JOURNAL.subtitle}</p>
        </div>
        
        <Carousel autoplay autoplayDelay={5000} className="w-full">
          {JOURNAL.posts.map((post, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-secondary/20">
                  <CardHeader className="p-0">
                    <Link to={post.link}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-3 h-20 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 h-24 overflow-hidden flex-grow leading-relaxed">
                      {post.description}
                    </p>
                    <Link 
                      to={post.link} 
                      className="font-semibold text-accent hover:underline mt-auto transition-colors duration-300 hover:text-accent/80"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/tamil-culture">Explore Our Heritage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}