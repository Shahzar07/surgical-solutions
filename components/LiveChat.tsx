'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Msg = { from: 'bot' | 'user'; text: string };

const GREETING: Msg = {
  from: 'bot',
  text: "Hi 👋 Welcome to Surgical Solutions. How can we help — product, pricing, or a bespoke pack?",
};

const QUICK_REPLIES = ['Trade pricing', 'Bespoke pack', 'Delivery times'];

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the transcript scrolled to the latest message.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: 'user', text: trimmed }]);
    setInput('');
    // Canned auto-reply — this is a demo widget, not a real backend.
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: "Thanks! A specialist will be right with you. In the meantime you can call +44 (0) 1753 299 353.",
        },
      ]);
    }, 700);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Live chat"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="chat-hd">
              <span className="chat-avatar">SS</span>
              <div className="chat-hd-meta">
                <strong>Surgical Solutions</strong>
                <span><i className="chat-dot" /> Online · replies in a few minutes</span>
              </div>
              <button className="chat-hd-x" onClick={() => setOpen(false)} aria-label="Close chat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            <div className="chat-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chat-msg chat-msg--${m.from}`}>{m.text}</div>
              ))}

              <div className="chat-quick">
                {QUICK_REPLIES.map((q) => (
                  <button key={q} className="chat-quick-btn" onClick={() => send(q)}>{q}</button>
                ))}
              </div>
            </div>

            <form
              className="chat-foot"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                aria-label="Message"
              />
              <button className="chat-send" type="submit" aria-label="Send message">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`chat-fab${open ? ' is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close live chat' : 'Open live chat'}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
          </svg>
        )}
        {!open && <span className="chat-fab-pulse" aria-hidden="true" />}
      </button>
    </>
  );
}
