import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Textarea } from '@/components/ui/Textarea';
import { WhatsappIcon, MessageSquare, Mail, Clock, MapPin, Send } from '@/components/icons/IconComponents';
import { CONTACT, SITE_CONFIG } from '@/constants/content';

const iconMap = {
  MessageSquare,
  Mail,
  Clock,
  MapPin
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section 
      id="contact-form" 
      className="bg-secondary/50 py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {CONTACT.title}
          </h2>
          <p className="text-xl text-muted-foreground">{CONTACT.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-2">
                {CONTACT.info.map((item, index) => {
                  const IconComponent = iconMap[item.icon] || WhatsappIcon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 hover:bg-primary/5">
                      <div className="bg-accent/10 p-3 rounded-full mt-1">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-medium hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 space-y-4">
                <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-105">
                  <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className="mr-2"/> Order on Whatsapp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 hover:scale-105">
                  <a href={`mailto:${SITE_CONFIG.contact.email}`}>
                    <Mail className="mr-2"/> Send Email
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3">
            <Card className="bg-background border-2 border-accent/20 text-foreground p-8 shadow-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-primary font-medium">First Name</label>
                      <Input id="first-name" placeholder="Your first name" required className="bg-secondary/30 border-accent/30 text-primary placeholder:text-muted-foreground focus:border-accent focus:ring-accent rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-primary font-medium">Last Name</label>
                      <Input id="last-name" placeholder="Your last name" required className="bg-secondary/30 border-accent/30 text-primary placeholder:text-muted-foreground focus:border-accent focus:ring-accent rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-primary font-medium">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="bg-secondary/30 border-accent/30 text-primary placeholder:text-muted-foreground focus:border-accent focus:ring-accent rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-primary font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-secondary/30 border-accent/30 text-primary placeholder:text-muted-foreground focus:border-accent focus:ring-accent rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-primary font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." required rows={5} className="bg-secondary/30 border-accent/30 text-primary placeholder:text-muted-foreground focus:border-accent focus:ring-accent rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg"/>
                  </div>
                  <div className="text-right">
                    <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Thank You!
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Thank you for reaching out to SARIRA! We will get back to you soon.
                  </motion.p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}