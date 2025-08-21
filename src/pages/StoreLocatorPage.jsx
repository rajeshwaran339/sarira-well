import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Phone, Clock } from 'lucide-react';

const stores = [
  {
    name: "SARIRA Wellness - Chennai Main",
    address: "1/40, 6 PCM Colony, ST.Thomas Mount, Chennai-600016",
    phone: "+91-7010422748",
    hours: "Mon-Sat: 10:00 AM - 6:00 PM, Sun: Closed",
    type: "Head Office & Store"
  },
  {
    name: "Coming Soon - Coimbatore",
    address: "Location to be announced",
    phone: "Contact main store",
    hours: "Opening Soon",
    type: "Upcoming Store"
  },
  {
    name: "Coming Soon - Madurai",
    address: "Location to be announced", 
    phone: "Contact main store",
    hours: "Opening Soon",
    type: "Upcoming Store"
  }
];

export default function StoreLocatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Store Locator
              </h1>
              <p className="text-xl text-muted-foreground">
                Find SARIRA products near you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stores.map((store, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{store.name}</CardTitle>
                    <div className="text-sm text-accent font-medium">{store.type}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <p className="text-muted-foreground">{store.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <p className="text-muted-foreground">{store.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <p className="text-muted-foreground">{store.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Can't find a store near you?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're expanding across Tamil Nadu! Contact us to suggest a location or inquire about becoming a retail partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/917010422748" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 h-11 rounded-md px-8 text-sm font-medium transition-colors"
                >
                  Contact Us on WhatsApp
                </a>
                <a 
                  href="mailto:sariranutrition@gmail.com"
                  className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-sm font-medium transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}