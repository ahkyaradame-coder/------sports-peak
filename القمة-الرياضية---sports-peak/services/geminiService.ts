
import { GoogleGenAI } from "@google/genai";

/**
 * Generates sports advice using Gemini AI.
 * Adheres to @google/genai best practices by initializing with process.env.API_KEY
 * and accessing the .text property directly.
 */
export const getSportsAdvice = async (userMessage: string) => {
  try {
    // Always initialize a new instance before making a call to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "أنت مساعد رياضي خبير في موقع 'القمة الرياضية'. أجب على أسئلة المستخدمين حول الرياضة، التكتيكات، الأخبار، والنتائج بلهجة حماسية واحترافية باللغة العربية. اجعل إجاباتك مختصرة ومفيدة.",
        temperature: 0.7,
      },
    });

    // Use .text property to extract the result
    return response.text || "لم أستطع معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع المساعد الذكي. حاول مرة أخرى لاحقاً.";
  }
};
