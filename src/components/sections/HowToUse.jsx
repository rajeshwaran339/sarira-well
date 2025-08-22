import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Utensils, Sandwich, Soup, Baby } from 'lucide-react';
import { HOW_TO_USE } from '@/constants/content';

const iconMap = {
  Utensils,
  Sandwich,
  Soup,
  Baby
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function HowToUse() {
  return (
    <section id="how-to-use" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <img 
            src="https://placehold.co/1200x400.png"
            alt="Person using SARIRA Fig Malt in a recipe"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {HOW_TO_USE.title}
          </h2>
          <p className="text-xl text-muted-foreground">{HOW_TO_USE.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_TO_USE.methods.map((method, index) => {
            const IconComponent = iconMap[method.icon];
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="text-center h-full flex flex-col bg-gradient-to-br from-white to-secondary/20">
                  <CardHeader>
                    <div className="mx-auto bg-accent/15 text-accent p-4 rounded-full w-fit mb-4 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle>{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}