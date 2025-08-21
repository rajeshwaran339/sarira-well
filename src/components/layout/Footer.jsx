import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from '@/components/icons/IconComponents';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SariraLogo } from '@/components/icons/SariraLogo';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { NAVIGATION, SITE_CONFIG } from '@/constants/content';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <Link to="/" className="mb-4 inline-block">
              <SariraLogo isFooter={true} className="h-12 text-primary-foreground" />
            </Link>
            <p>
              Functional wellness rooted in Tamil tradition, blended for today's lifestyle. Nourishing families with nature's goodness.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="md:pt-4">
            <h4 className="font-bold text-lg text-accent mb-4">Navigate</h4>
            <ul className="space-y-3">
              {NAVIGATION.footer.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-accent transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div className="md:pt-4">
            <h4 className="font-bold text-lg text-accent mb-4">Support</h4>
            <ul className="space-y-3">
              {NAVIGATION.policies.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-accent transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact & Subscribe */}
          <div className="space-y-8 md:pt-4">
            <div>
              <h4 className="font-bold text-lg text-accent mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                  <span>{SITE_CONFIG.contact.address}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-accent transition">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-accent transition">
                    {SITE_CONFIG.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-accent mb-4">Stay Updated</h4>
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-grow" 
                />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
        
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 gap-4 text-center md:text-left">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} SARIRA. Made with <Heart className="w-4 h-4 text-accent" /> in Chennai, Tamil Nadu
          </p>
          <p>Committed to natural wellness and sustainable practices</p>
        </div>
      </div>
    </footer>
  );
}