import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { WELLNESS_AI } from '@/constants/content';

export function WellnessAI() {
  const [topic, setTopic] = useState('');
  const [tip, setTip] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setTip(`Here's a wellness tip for "${topic}": Traditional Tamil wisdom suggests incorporating natural ingredients like turmeric and ginger into your daily routine. These have been used for centuries to promote overall well-being and vitality.`);
      setIsLoading(false);
      setTopic('');
    }, 2000);
  };

  const handleSuggestionClick = (suggestion) => {
    setTopic(suggestion);
  };

  return (
    <section id="wellness-ai" className="bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-[3%]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent p-3 rounded-full mb-4">
            <BrainCircuit className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {WELLNESS_AI.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {WELLNESS_AI.subtitle}
          </p>
        </div>
        
        <Card className="shadow-2xl border-primary/10 bg-white/60 backdrop-blur-md max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-2 text-center">
                {WELLNESS_AI.formTitle}
              </h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {WELLNESS_AI.formSubtitle}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div className="space-y-2">
                  <Input 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Healthy Digestion" 
                    className="flex-grow bg-background text-center shadow-md transition-all duration-300 hover:shadow-lg focus:shadow-lg" 
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !topic.trim()} 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  {isLoading ? 'Generating...' : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" /> Get Wellness Tip
                    </>
                  )}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Or try one of these:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {WELLNESS_AI.suggestions.map(suggestion => (
                    <Button 
                      key={suggestion} 
                      variant="outline" 
                      size="sm" 
                      className="border-accent text-accent hover:bg-accent/10 shadow-sm transition-all duration-300 hover:shadow-md"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>

              {tip && (
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="p-6 flex flex-col items-center justify-center h-full transition-opacity duration-500 bg-primary/5 rounded-xl shadow-inner">
                    <div className="w-full text-center">
                      <h4 className="font-bold text-lg text-accent mb-2 flex items-center justify-center">
                        <Sparkles className="mr-2 h-5 w-5"/>
                        Your AI-Generated Wellness Tip
                      </h4>
                      <p className="whitespace-pre-wrap text-primary/90 leading-relaxed">{tip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}