import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/constants/content';

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? FAQ.items : FAQ.items.slice(0, 5);

  return (
    <section id="faq" className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {FAQ.title}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg shadow-sm border border-border data-[state=open]:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base text-muted-foreground">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {!showAll && FAQ.items.length > 5 && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
                Show More Questions
              </Button>
            </div>
          )}
          <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to contact our wellness team — we're here to help you on your journey to better living.</p>
          </div>
        </div>
      </div>
    </section>
  );
}