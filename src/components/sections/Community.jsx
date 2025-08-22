import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Home, Store, Instagram, Facebook, Utensils, CheckCircle2 } from 'lucide-react';
import { COMMUNITY, SITE_CONFIG } from '@/constants/content';

const iconMap = {
  Home,
  Store,
  Utensils
};

export function Community() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="community" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {COMMUNITY.title}
          </h2>
          <p className="text-xl text-muted-foreground">{COMMUNITY.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {COMMUNITY.sections.map((section, index) => {
            const IconComponent = iconMap[section.icon];
            
            if (section.title === "For Stores & Retailers") {
              return (
                <Card key={index} className="bg-gradient-to-br from-secondary/50 to-secondary/70 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group flex flex-col">
                  <CardHeader>
                    <div className="text-accent group-hover:text-accent mb-4 bg-accent/10 p-3 rounded-full w-fit shadow-md">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-all duration-300 leading-relaxed">
                        {section.description}
                      </p>
                      <Button 
                        variant="link" 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="text-accent p-0 h-auto self-start mb-4"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                    <div className="mt-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                            Become a Reseller
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-primary">Partner with SARIRA</DialogTitle>
                            <DialogDescription>
                              Let's build a healthier community — together.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="mb-6">
                              <h4 className="font-bold text-lg text-primary mb-3">Why Partner with Us?</h4>
                              <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 shrink-0" />
                                  Attractive wholesale pricing
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 shrink-0" />
                                  Clean-label, fast-moving wellness product
                                </li>
                              </ul>
                            </div>
                            <Button asChild size="lg">
                              <a href={`mailto:${SITE_CONFIG.contact.email}`}>
                                Become a Reseller →
                              </a>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              );
            }

            return (
              <Card key={index} className="bg-gradient-to-br from-secondary/50 to-secondary/70 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group flex flex-col">
                <CardHeader>
                  <div className="text-accent group-hover:text-accent mb-4 bg-accent/10 p-3 rounded-full w-fit shadow-md">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="mb-6 text-muted-foreground group-hover:text-primary-foreground/80 min-h-[140px] leading-relaxed">
                    {section.description}
                  </CardDescription>
                  <div className="space-y-4 mt-auto">
                    {section.title === "For Families" && (
                      <>
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary group-hover:text-primary-foreground hover:text-accent">
                            <Instagram className="w-7 h-7" />
                          </a>
                          <a href={SITE_CONFIG.social.facebook} className="text-primary group-hover:text-primary-foreground hover:text-accent">
                            <Facebook className="w-7 h-7" />
                          </a>
                        </div>
                        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                          <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                            Join on WhatsApp
                          </a>
                        </Button>
                      </>
                    )}
                    {section.title === "Nourishing Recipes" && (
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                        <Link to="/recipes">Explore Recipes</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}