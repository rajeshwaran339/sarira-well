import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const Accordion = ({ children, type = "single", collapsible = false, defaultValue, className }) => {
  const [openItems, setOpenItems] = useState(defaultValue ? [defaultValue] : []);

  const toggleItem = (value) => {
    if (type === "single") {
      if (collapsible) {
        setOpenItems(openItems.includes(value) ? [] : [value]);
      } else {
        setOpenItems([value]);
      }
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter(item => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { openItems, toggleItem })
      )}
    </div>
  );
};

const AccordionItem = ({ value, className, children, openItems, toggleItem }) => {
  const isOpen = openItems?.includes(value);
  
  return (
    <div className={cn("border-b", className)} data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, isOpen, toggleItem })
      )}
    </div>
  );
};

const AccordionTrigger = ({ className, children, value, isOpen, toggleItem, ...props }) => (
  <button
    className={cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline w-full text-left",
      className
    )}
    onClick={() => toggleItem && toggleItem(value)}
    data-state={isOpen ? "open" : "closed"}
    type="button"
    aria-expanded={isOpen}
    {...props}
  >
    {children}
    <ChevronDown 
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-200", 
        isOpen && "rotate-180"
      )} 
    />
  </button>
);

const AccordionContent = ({ className, children, isOpen }) => (
  <div
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    )}
    data-state={isOpen ? "open" : "closed"}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };