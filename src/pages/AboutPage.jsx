import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Ingredients } from '@/components/sections/Ingredients';
import { Journal } from '@/components/sections/Journal';
import { About } from '@/components/sections/About';
import { Button } from '@/components/ui/Button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Ingredients />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Journal />
        </motion.div>

        <motion.section 
          className="py-12 md:py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-headline mb-6">
              Ready to begin your wellness journey?
            </h2>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                <Link to="/product">Shop Fig Malt</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}