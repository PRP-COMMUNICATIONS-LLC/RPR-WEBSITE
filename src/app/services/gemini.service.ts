import { Injectable } from '@angular/core';
import { GoogleGenAI, Content } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private modelId = 'gemini-2.5-flash';

  constructor() {
    // Robustly check for the API key in different environment locations
    let apiKey = 'AIzaSyDrZXkgu3vF82mZwD0IKbYK9IL-asrHWj4';

    try {
      // 1. Check standard Node.js process (Cloud/Build time)
      if (typeof process !== 'undefined' && process.env && process.env['API_KEY']) {
        apiKey = process.env['API_KEY'];
      }
      // 2. Check Browser Polyfill (Local serve via main.ts)
      else if ((window as any).process?.env?.API_KEY) {
        apiKey = (window as any).process.env.API_KEY;
      }
    } catch (e) {
      console.warn('Error reading environment variables', e);
    }

    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.error('Gemini API Key is missing. AI features will not function.');
    }
  }

  async sendMessage(history: { role: string, content: string }[], message: string): Promise<string> {
    if (!this.ai) {
      return "System Error: API Configuration missing. Please verify credentials in src/main.ts";
    }

    try {
      const systemContext = `You are Ollie, the AI assistant for RPR Communications LLC. 
      Company Info:
      - Founder: Puvan Sivanasan (20 years exp, 2016 Gold Award winner).
      - Mission: Global Reach. Strategic Activation.
      - Key Clients: Starlight Pty Ltd (Australia), Bosch Global (100 years Malaysia campaign).
      - Tone: Professional, strategic, concise, "Fintech" style.
      
      Answer questions about compliance, recruitment, and brand activation services.`;

      // The calling component adds the user's current message to the history before calling this.
      // We must exclude it from the 'history' config passed to startChat, 
      // because we send the current message explicitly in chat.sendMessage().
      const previousHistory = history.length > 0 ? history.slice(0, -1) : [];

      const formattedHistory: Content[] = previousHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const chat = this.ai.chats.create({
        model: this.modelId,
        config: {
          systemInstruction: systemContext,
        },
        history: formattedHistory
      });

      const result = await chat.sendMessage({
        message: message
      });

      return result.text || "";
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I apologize, but I'm having trouble connecting to the strategic database at the moment. Please try again.";
    }
  }
}
