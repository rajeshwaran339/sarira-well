import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/constants/content';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {TESTIMONIALS.title}
          </h2>
          <p className="text-xl text-muted-foreground">{TESTIMONIALS.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.list.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-background to-secondary/30 border-primary/10 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed flex-grow font-medium">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 mr-4 bg-primary/15 text-primary font-bold rounded-full flex items-center justify-center shadow-md">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}