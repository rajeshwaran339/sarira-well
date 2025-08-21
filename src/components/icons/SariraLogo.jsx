import React from 'react';

export const SariraLogo = ({ className, isFooter = false, ...props }) => (
  <div className={`font-headline text-2xl font-bold ${isFooter ? 'text-primary-foreground' : 'text-primary'} ${className}`} {...props}>
    SARIRA
  </div>
);