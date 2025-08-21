import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

export default function ReturnsRefundsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Returns & Refunds
            </h1>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Return Policy</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We accept returns of unopened items in their original packaging within 7 days of delivery. To initiate a return, please contact us at sariranutrition@gmail.com.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Damaged or Incorrect Products</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  If you receive a damaged or incorrect product, please send a photo of the item to our support team within 48 hours of delivery. We will arrange for a replacement or a full refund at no extra cost to you.
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