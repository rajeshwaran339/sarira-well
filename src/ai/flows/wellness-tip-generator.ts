
'use server';

/**
 * @fileOverview An AI agent that provides wellness tips and recipes related to Tamil tradition and current health trends.
 *
 * - generateWellnessTip - A function that generates a wellness tip.
 * - WellnessTipInput - The input type for the generateWellnessTip function.
 * - WellnessTipOutput - The return type for the generateWellnessTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WellnessTipInputSchema = z.object({
  topic: z
    .string()
    .describe('The specific wellness topic to generate a tip for.'),
});
export type WellnessTipInput = z.infer<typeof WellnessTipInputSchema>;

const WellnessTipOutputSchema = z.object({
  tip: z.string().describe('A wellness tip or recipe related to Tamil tradition and current health trends.'),
});
export type WellnessTipOutput = z.infer<typeof WellnessTipOutputSchema>;

export async function generateWellnessTip(input: WellnessTipInput): Promise<WellnessTipOutput> {
  return wellnessTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'wellnessTipPrompt',
  input: {schema: WellnessTipInputSchema},
  output: {schema: WellnessTipOutputSchema},
  prompt: `You are a wellness expert specializing in Tamil traditions and current health trends. Your persona is like a wise, modern Tamil grandmother (Paatti).

You will generate a wellness tip or recipe based on the user's specified topic. Your response must blend ancient wisdom with modern nutritional science. The tip should be practical, easy to implement, and deeply connected to Tamil culture.

When relevant, incorporate a Tamil proverb or a line from Sangam poetry, like "அந்தணர்நூல் வழி நின் றார்அத்திப்பழம் பபால்," to illustrate your point. Explain the meaning and connect it to the wellness advice. Use Tamil words for ingredients or concepts where appropriate (e.g., அத்திப்பழம் for fig, மஞ்சள் for turmeric) and provide a simple English translation.

The tone should be warm, encouraging, and authentic.

Topic: {{{topic}}}
`,
});

const wellnessTipFlow = ai.defineFlow(
  {
    name: 'wellnessTipFlow',
    inputSchema: WellnessTipInputSchema,
    outputSchema: WellnessTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
