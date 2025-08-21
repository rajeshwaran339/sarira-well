import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

export default function ShippingDeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Shipping & Delivery
            </h1>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Shipping Coverage & Charges</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
                    <li>Free shipping on prepaid orders above ₹800.</li>
                    <li>For orders below ₹800, delivery charges vary by location.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Order Processing Time</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Orders placed before 5 PM are processed within 1 business day.</li>
                    <li>Weekends & public holidays are not processing days.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}