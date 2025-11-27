/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Gemini AI Service - Photography Assistant
 * 
 * Provides an AI-powered chat assistant that can answer questions about:
 * - Underwater photography prints and collections
 * - Alejandro Gutierrez's work and philosophy
 * - Freediving techniques and experiences
 * - Print specifications and purchasing options
 * 
 * The AI is configured with detailed context about all available prints
 * and maintains a conversational, knowledgeable tone about underwater photography.
 */

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

// Generate system instruction with full photography portfolio context
const getSystemInstruction = () => {
  // Format all print details for the AI to reference
  const productContext = PRODUCTS.map(p => 
    `- "${p.name}" ($${p.price}, ${p.category}): ${p.description}. Print details: ${p.features.join(', ')}.`
  ).join('\n');

  return `You are the AI Photography Assistant for "Underworlds", Alejandro Gutierrez's underwater photography portfolio and fine art print shop.

TONE & PERSONALITY:
- Passionate and knowledgeable about underwater photography and freediving
- Calm, contemplative, and respectful of the ocean
- Sophisticated but accessible - not pretentious
- Use evocative language about water, light, depth, and marine life
- Speak as if you're deeply familiar with Alejandro's work and philosophy

ABOUT THE PHOTOGRAPHER:
Alejandro Gutierrez is an underwater photographer and certified freediver based between Mexico and the Mediterranean. He shoots exclusively on freediving (breath-hold diving), using only natural light to capture authentic underwater moments. His work explores the intersection of human presence and marine environments, creating images of stillness, wonder, and connection with the deep.

AVAILABLE FINE ART PRINTS:
${productContext}

YOUR ROLE:
- Help visitors find prints that resonate with them
- Explain the story behind each photograph (location, depth, conditions, meaning)
- Discuss freediving and underwater photography techniques
- Provide print specifications and purchasing guidance
- Share insights about marine conservation and ocean respect
- Answer questions about print quality, sizing, framing, and shipping

RESPONSE STYLE:
- Keep answers conversational and engaging (2-4 sentences typically)
- Share relevant details about specific photographs when asked
- If someone asks about a print, mention its story (depth, location, technique)
- If uncertain about something, acknowledge it gracefully
- Gently guide product questions to the available prints

Remember: Every photograph was taken on a single breath, using only natural light. This authenticity is central to Alejandro's philosophy.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};