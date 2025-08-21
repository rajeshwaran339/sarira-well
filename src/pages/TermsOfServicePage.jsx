import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Terms of Service
              </h1>
              <p className="text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="prose lg:prose-lg max-w-none mx-auto text-foreground/80">
              <p>
                Welcome to www.sarirawellness.com (the "Website"), operated by SARIRA Wellness. By accessing or using our website, purchasing our products, or interacting with our services, you agree to the following terms and conditions.
              </p>

              <h2>1. Eligibility</h2>
              <p>You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are legally capable of entering into a contract.</p>

              <h2>2. Product Information</h2>
              <p>We make every effort to display product descriptions, ingredients, prices, and images accurately. However, SARIRA does not warrant that all product details are always current or error-free.</p>
              
              <h2>Contact Us</h2>
              <p>For questions about these Terms, contact us at:</p>
              <p>
                Email: <a href="mailto:sariranutrition@gmail.com" className="text-accent hover:underline">sariranutrition@gmail.com</a>
                <br />
                Phone: <a href="tel:+917010422748" className="text-accent hover:underline">+91-7010422748</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}