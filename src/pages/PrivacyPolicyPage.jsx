import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Shield, Info, Share2, Cookie, Lock, BadgeCheck, Users, RefreshCw, Landmark } from 'lucide-react';

const policySections = [
  {
    id: "info",
    title: "1. Information We Collect",
    icon: <Info className="w-5 h-5" />,
    content: (
      <div className="text-muted-foreground">
        <p>When you use our website or place an order, we may collect the following types of information:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address.</li>
          <li><strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details).</li>
          <li><strong>Order History:</strong> Items purchased, quantity, order value, and delivery records.</li>
        </ul>
      </div>
    )
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    icon: <Shield className="w-5 h-5" />,
    content: (
      <div className="text-muted-foreground">
        <p>We use your data to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Process and fulfill your orders.</li>
          <li>Send order confirmations and delivery updates.</li>
          <li>Provide customer support.</li>
          <li>Send promotional emails (only with your consent).</li>
        </ul>
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {policySections.map((section) => (
                <AccordionItem 
                  key={section.id} 
                  value={section.id} 
                  className="bg-white rounded-lg shadow-sm border border-border data-[state=open]:border-primary transition-all duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <span className="text-accent">{section.icon}</span>
                      <span>{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-base">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}