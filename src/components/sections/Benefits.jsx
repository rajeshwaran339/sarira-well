import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardTitle } from '@/components/ui/Card';
import { Baby, Heart, Sparkles, Shield, Leaf, Coffee, Cookie, Droplets, Nut } from 'lucide-react';
import { BENEFITS } from '@/constants/content';

const iconMap = {
  Baby,
  Heart,
  Sparkles,
  Shield,
  Leaf,
  Coffee,
  Cookie,
  Droplets,
  Nut
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {BENEFITS.title}
          </h2>
          <p className="text-xl text-muted-foreground">{BENEFITS.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {BENEFITS.categories.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
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
                <Card className="text-center h-full flex flex-col items-center justify-center border-primary/10 p-6 bg-gradient-to-br from-white to-secondary/20">
                  <div className="mx-auto bg-accent/15 text-primary p-4 rounded-full w-fit mb-4 shadow-md">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary leading-tight">
                    {benefit.name}
                  </CardTitle>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}