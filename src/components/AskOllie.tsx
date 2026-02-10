import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { askOllie } from '../services/ollieClient';

/**
 * TS-Λ3 // ASK OLLIE [v4.8.5]
 * Path: src/components/AskOllie.tsx
 */
const AskOllie = () => {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'ollie' | 'user'; content: string }[]>([
    { role: 'ollie', content: "Welcome to the Agency layer. I'm Ollie. How can I help move the needle today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const query = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsLoading(true);

    try {
      const response = await askOllie(query, i18n.language);
      setMessages(prev => [...prev, { role: 'ollie', content: response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ollie', content: "Substrate error. Try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#050505] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div ref={scrollRef} className="mb-10 h-[400px] overflow-y-auto space-y-6 px-4 custom-scrollbar scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-8 py-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-cyan-500 text-black font-bold' : 'bg-zinc-900 text-slate-300'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 px-8 py-4 rounded-2xl animate-pulse text-slate-500 text-xs uppercase tracking-widest font-mono">
                  Ollie is thinking...
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center bg-black border border-white/10 rounded-2xl px-6 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('ollie.placeholder', 'What is the mission?')}
              className="w-full bg-transparent border-none text-white focus:ring-0 text-sm py-4"
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskOllie;
