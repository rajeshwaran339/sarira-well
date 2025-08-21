import React, { useState, createContext, useContext } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

const DialogContext = createContext();

const Dialog = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const handleOpenChange = (newOpen) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ children, asChild }) => {
  const { setIsOpen } = useContext(DialogContext);
  
  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => setIsOpen(true)
    });
  }
  
  return (
    <button onClick={() => setIsOpen(true)}>
      {children}
    </button>
  );
};

const DialogContent = ({ className, children }) => {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div
        className={cn(
          "relative bg-background rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto p-6",
          className
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
);

const DialogTitle = ({ className, ...props }) => (
  <h2
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);

const DialogDescription = ({ className, ...props }) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription };