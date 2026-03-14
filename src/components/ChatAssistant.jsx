import { useMemo, useState } from 'react';
import { chatbotAnswers } from '../data/portfolioData';

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: chatbotAnswers.intro },
  ]);
  const [input, setInput] = useState('');

  const reply = useMemo(
    () => (text) => {
      const q = text.toLowerCase();

      if (q.includes('skill') || q.includes('tech')) return chatbotAnswers.skills;
      if (q.includes('project') || q.includes('work')) return chatbotAnswers.projects;
      if (q.includes('experience') || q.includes('job')) return chatbotAnswers.experience;
      if (q.includes('contact') || q.includes('email')) return chatbotAnswers.contact;
      if (q.includes('resume') || q.includes('cv')) return chatbotAnswers.resume;

      return "I can help with Kunal's skills, projects, experience, contact details, and resume.";
    },
    [],
  );

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    const botMessage = { type: 'bot', text: reply(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chatbot-panel panel">
          <div className="chatbot-header">
            <strong>Ask Kunal AI</strong>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={index} className={`chat-bubble ${message.type}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Ask about skills, projects, experience..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={() => setOpen((prev) => !prev)}>
        {open ? 'Close' : 'Ask Kunal AI'}
      </button>
    </div>
  );
};

export default ChatAssistant;
