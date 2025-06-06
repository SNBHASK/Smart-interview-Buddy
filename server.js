require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const MODEL = "meta-llama/Llama-3-8B-Instruct"; 
const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

app.post('/api/interview', async (req, res) => {
  try {
    const { role, company } = req.body;
    if (!role || !company) {
      return res.status(400).json({ error: 'Role and company are required' });
    }

    const prompt = `Generate 5 interview questions for a ${role} at ${company}.`;

    const response = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt })
    });

    const data = await response.json();
    console.log("HF Response:", data);

    const generatedText = data?.[0]?.generated_text || data?.generated_text || data || "No output";

    res.json({ answer: typeof generatedText === "string" ? generatedText : JSON.stringify(generatedText) });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
