import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini with the full model name
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

const PROMPT_TEMPLATE = (tasks) => `
You are a helpful assistant that processes raw, messy task descriptions. 
For each task:
1. Summarize it in one sentence.
2. Assign 1–2 relevant hashtags (e.g., #urgent, #frontend).
3. Rate priority from 1 (low) to 5 (high).

Output as a JSON array with: summary, tags, priority.

Tasks:
${tasks.map((t) => `"${t}"`).join(",\n")}

Output:
`;

app.post("/summarize", async (req, res) => {
  const { tasks } = req.body;

  if (!tasks || !Array.isArray(tasks)) {
    return res.status(400).json({ error: "tasks array is required" });
  }

  try {
    const prompt = PROMPT_TEMPLATE(tasks);
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      return res.status(500).json({ error: "Failed to parse model output", raw: text });
    }

    res.json({ summarizedTasks: parsed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Gemini server running at http://localhost:${PORT}`);
});
