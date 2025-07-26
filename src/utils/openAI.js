import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

export default genAI;
