import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { RECIPES } from '@/constants/content';

export default function RecipesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section id="recipes" className="bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {RECIPES.title}
              </h2>
              <p className="text-xl text-muted-foreground">{RECIPES.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RECIPES.list.map((recipe) => (
                <Card key={recipe.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
                  <CardHeader className="p-0">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-48 object-cover" 
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-2 h-16">{recipe.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{recipe.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="font-semibold text-accent hover:underline p-0 h-auto self-start mt-auto">
                          View Details →
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{recipe.title}</DialogTitle>
                          <DialogDescription>
                            This recipe is coming soon! We are working on creating detailed instructions for you. Please check back later.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Explore More Recipes
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>More Recipes Coming Soon!</DialogTitle>
                    <DialogDescription>
                      Our team is busy in the kitchen crafting more delicious and healthy recipes for you. Follow us on social media for the latest updates!
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}