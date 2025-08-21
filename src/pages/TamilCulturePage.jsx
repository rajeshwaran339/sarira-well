import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IMAGES } from '@/constants/content';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.3 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TamilCulturePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Chapter 1: The Poetic Opening */}
        <section ref={heroRef} id="chapter-1" className="relative h-screen overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: videoScale, y: videoY }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-50"
              poster="https://storage.googleapis.com/stedi-dev-images/sarira-fig-tree.png"
            >
              <source src={IMAGES.figTreeVideo} type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-4">
              <motion.p variants={staggerItem} className="font-headline text-4xl md:text-6xl text-white/90 mb-2">
                "அந்தணர்நூல் வழி நின் றார்"
              </motion.p>
              <motion.p variants={staggerItem} className="font-headline text-4xl md:text-6xl text-white/90">
                "அத்திப்பழம் பபால்"
              </motion.p>
              <motion.p variants={staggerItem} className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-body italic">
                A metaphor from Sangam poetry comparing pure character to the sweetness of a fig.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Chapter 2: Rooted in Tradition */}
        <motion.section {...fadeIn} id="chapter-2" className="bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                  Rooted in Tamil Tradition
                </h2>
                <p className="text-lg text-muted-foreground">
                  Long before wellness became a trend, Tamil households embraced it as a way of life. At the center of this ancestral wisdom lies the fig (அத்திப்பழம்) — not just as a fruit, but as a symbol of vitality, fertility, and spiritual well-being.
                </p>
              </div>
              <div>
                <img
                  src={IMAGES.grandmothersHands}
                  alt="Grandmother's hands"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Chapter 5: Grandmother's Wisdom */}
        <motion.section {...fadeIn} id="chapter-5" className="relative bg-white py-20 md:py-32">
          <div className="absolute inset-0 opacity-5">
            <img
              src={IMAGES.traditionalKitchen}
              alt="Traditional Kitchen Background"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 max-w-4xl text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                If your grandmother ran a wellness brand...
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                She trusted her senses, her soil, and the science passed down on banana leaves — not textbooks. You call it functional food. She called it breakfast. The West calls it gut health. She just told you not to skip vendhaya kanji on Mondays.
              </p>
              <motion.p
                className="text-2xl md:text-3xl font-headline text-brown my-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                viewport={{ once: true, amount: 0.5 }}
              >
                "We didn't invent anything. We simply bottled what they believed in."
              </motion.p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/product">Discover Your Roots</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section {...fadeIn} id="final-cta" className="bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Taste the Legacy</h2>
            <p className="text-xl text-muted-foreground mb-10">Experience the pure, time-tested goodness of SARIRA Fig Malt.</p>
            <div className="flex justify-center">
              <img
                src={IMAGES.productMain}
                alt="SARIRA Fig Malt"
                className="w-full max-w-sm rounded-lg shadow-2xl mb-10"
              />
            </div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
              <Link to="/product">Shop Now</Link>
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}