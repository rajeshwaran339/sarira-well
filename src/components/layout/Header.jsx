import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SariraLogo } from '@/components/icons/SariraLogo';
import { NAVIGATION, SITE_CONFIG } from '@/constants/content';
import { cn } from '@/utils/cn';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent',
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Link to="/" className="text-primary">
          <SariraLogo className="h-14" />
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          {NAVIGATION.main.map(link => (
            <Link 
              key={link.href} 
              to={link.href} 
              className="text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" onClick={closeMenu} className="text-primary">
            <SariraLogo className="h-14" />
          </Link>
          <Button onClick={closeMenu} variant="ghost" size="icon">
            <X className="h-6 w-6 text-primary" />
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
          {NAVIGATION.main.map(link => (
            <Link 
              key={link.href} 
              to={link.href} 
              onClick={closeMenu} 
              className="text-2xl text-primary hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg">
            <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Order Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}