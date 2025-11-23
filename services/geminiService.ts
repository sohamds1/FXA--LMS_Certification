import { GoogleGenAI } from "@google/genai";

// This service is prepared for dynamic content generation or an AI chatbot 
// to assist teachers with certification questions.

const apiKey = process.env.API_KEY || ''; 

// We handle the case where the key might be missing gracefully in the UI, 
// but strictly define the service here.
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateMarketingCopy = async (topic: string): Promise<string> => {
  if (!ai) return "AI Service Unavailable";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, punchy, maximalist marketing tagline for an Abacus academy about: ${topic}`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content.";
  }
};
