import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Leaf, Brain, Sprout } from 'lucide-react';
import { INGREDIENTS } from '@/constants/content';

const iconMap = {
  Leaf,
  Brain,
  Sprout
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {INGREDIENTS.title}
          </h2>
          <p className="text-xl text-muted-foreground">{INGREDIENTS.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {INGREDIENTS.list.map((ingredient, index) => {
            const IconComponent = iconMap[ingredient.icon];
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="text-center h-full flex flex-col border-primary/10 bg-gradient-to-br from-white to-secondary/20">
                  <CardHeader>
                    <div className="mx-auto bg-accent/15 text-accent p-4 rounded-full w-fit mb-4 shadow-md">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-primary">
                      {ingredient.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">{ingredient.description}</p>
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