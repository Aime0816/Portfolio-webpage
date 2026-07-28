import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE_ITEMS } from './src/data/portfolioData.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API Route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form submission API
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    console.log(`[Contact Form] From: ${name} (${email}) | Subject: ${subject || 'No Subject'}`);
    console.log(`Message: ${message}`);

    return res.json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully to Aime Nsengiyumva.'
    });
  });

  // Gemini AI Chatbot Assistant endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message text is required.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: `Hi! I'm Aime Nsengiyumva's virtual portfolio assistant. Aime is a Software Engineer, AI Developer, and UI/UX Designer specializing in React, Next.js, Node.js, PHP, and Gemini AI integrations. You can reach out directly at ${PERSONAL_INFO.email} or via the contact form!`
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `
You are an intelligent, friendly, and professional AI Assistant representing Aime Nsengiyumva on his personal portfolio website.
Aime Nsengiyumva is a Software Engineer, AI Developer, and UI/UX Designer based in Kigali, Rwanda (open to global remote roles).

Here is the authoritative information about Aime:
- Bio: ${PERSONAL_INFO.bio}
- Detailed About: ${PERSONAL_INFO.aboutDetailed.join(' ')}
- Email: ${PERSONAL_INFO.email}
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}

Key Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}. Tech stack: ${p.technologies.join(', ')}. Link: ${p.liveUrl}`).join('\n')}

Key Skills:
${SKILL_CATEGORIES.map(c => `- ${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

Experience & Hackathons:
${EXPERIENCE_ITEMS.map(e => `- ${e.role} at ${e.organization} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Instructions for your responses:
1. Speak concisely, warmly, and clearly as Aime's portfolio assistant.
2. Direct visitors to relevant sections or project details when applicable.
3. Keep answers concise (1-3 paragraphs maximum).
4. Emphasize Aime's skills in AI (Gemini API, OpenAI), Full Stack Development (React, Next.js, Node.js, PHP), and clean UI/UX design.
5. If someone asks how to hire or contact Aime, invite them to use the Contact form or email him at ${PERSONAL_INFO.email}.
`;

      const promptText = `User message: ${message}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: systemInstruction + '\n\n' + promptText }] }
        ]
      });

      const reply = response.text || "Thank you for asking! Aime is a passionate Software Engineer and AI Developer. Feel free to explore his projects or leave a message in the contact section!";

      return res.json({ reply });
    } catch (error: any) {
      console.error('Gemini API Chat Error:', error);
      return res.status(500).json({
        reply: "Thanks for chatting! I'm currently having trouble connecting to my AI service, but you can explore Aime's projects above or reach him directly via the contact form or email!"
      });
    }
  });

  // Serve static assets / Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

startServer();
