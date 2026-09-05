import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export default function ArtisanConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Namaste! I am your GreenTribe Craft Concierge. How can I assist you with our North East cane & bamboo heritage products today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    "Custom Craft Order",
    "Care Instructions",
    "Bulk & Corporate Gifting",
    "Shipping Duration"
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setChatMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      let reply = "Thank you for inquiring! Our NECBDC craft specialists will be delighted to guide you. You can also reach our helpline at +91 1800-200-9988.";
      if (text.toLowerCase().includes('care')) {
        reply = "Assam Cane and Bamboo should be cleaned with a dry or slightly damp microfiber cloth. Avoid prolonged direct moisture exposure!";
      } else if (text.toLowerCase().includes('bulk') || text.toLowerCase().includes('gifting')) {
        reply = "We offer bespoke corporate hampers handcrafted by tribal women artisans in Assam and Tripura. Email us at partnerships@necbdc.org.in for catalogs!";
      } else if (text.toLowerCase().includes('custom')) {
        reply = "We craft custom cane furniture and wall murals! Tell us your dimensions and requirements in the Contact Us page.";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-green hover:bg-brand-green-hover text-white p-3.5 sm:p-4 rounded-full shadow-2xl border-2 border-brand-gold flex items-center gap-2.5 transition-transform transform hover:scale-105 group animate-pulseGold"
          title="Artisan Craft Concierge"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-brand-green animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-amber-100 pr-1">
            Artisan Concierge
          </span>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-brand-gold/40 w-[calc(100vw-2rem)] sm:w-96 max-w-sm overflow-hidden flex flex-col h-[440px] sm:h-[460px] animate-fadeIn">
          
          {/* Header */}
          <div className="emerald-gradient-bg text-white p-4 flex items-center justify-between border-b border-brand-gold/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/50 flex items-center justify-center text-amber-300 font-bold text-sm shrink-0">
                NEC
              </div>
              <div>
                <h3 className="brand-font-serif text-sm font-bold text-amber-100 flex items-center gap-1.5">
                  GreenTribe Concierge <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h3>
                <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Live • NECBDC Advisor
                </span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-emerald-300 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-brand-beige/50 text-xs">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-brand-green text-white rounded-br-none shadow-xs' 
                      : 'bg-white border border-brand-border-light text-brand-charcoal rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick prompts */}
          <div className="p-2 bg-white border-t border-brand-border-light/60 flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="text-[10px] bg-brand-beige hover:bg-emerald-50 text-brand-green font-semibold px-2.5 py-1 rounded-full border border-brand-border-light transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 bg-white border-t border-brand-border-light flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-brand-beige border border-brand-border-light rounded-xl px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
            <button
              type="submit"
              className="bg-brand-green hover:bg-brand-green-hover text-white p-2 rounded-xl"
            >
              <Send className="w-4 h-4 text-amber-300" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
