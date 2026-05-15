"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { useChatOpen } from "./ChatContext";

const SUGGESTIONS = [
  "What are your skills?",  
  "Tell some of about your projects",
  "Are you available for hire?",
  "How can I contact you?",
];

export default function ChatWidget() {
  const { open, setOpen } = useChatOpen();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! 👋 I'm Melkias's AI assistant. Ask me anything about him — his skills, projects, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;
    setInput("");
    const updated = [...messages, { role: "user", content: userMsg }];
    setMessages(updated);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger button — hidden when panel is open */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 px-3 py-4 rounded-r-xl font-semibold text-white shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: '#fd5900',
          opacity: open ? 0 : 1,
          pointerEvents: open ? 'none' : 'auto',
          transitionProperty: 'opacity, transform',
        }}
        aria-label="Open AI Chat"
      >
        <RiRobot2Line className="w-5 h-5" />
        <span className="text-[10px] cursor-pointer tracking-widest font-bold" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Talk to My AI
        </span>
      </button>

      {/* Chat Panel — slides in from left, part of document flow via fixed width */}
      <div
        className="fixed left-0 top-0 h-full z-40 flex flex-col shadow-2xl transition-all duration-300 ease-in-out"
        style={{
          width: '360px',
          backgroundColor: '#0f0f0f',
          borderRight: '1px solid #1e1e1e',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" style={{ backgroundColor: '#fd5900' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <RiRobot2Line className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Melkias&apos;s AI</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                <span className="text-white/80 text-xs">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mr-2 mt-1" style={{ backgroundColor: '#fd590020', color: '#fd5900' }}>
                  <RiRobot2Line className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "text-white rounded-br-sm" : "text-gray-200 rounded-bl-sm"}`}
                style={{ backgroundColor: msg.role === "user" ? '#fd5900' : '#1a1a1a' }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mr-2 mt-1" style={{ backgroundColor: '#fd590020', color: '#fd5900' }}>
                <RiRobot2Line className="w-4 h-4" />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1a1a1a] flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 rounded-full text-gray-300 hover:text-white transition-colors"
                style={{ border: '1px solid #2a2a2a', backgroundColor: '#1a1a1a' }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 pb-5 pt-2 flex-shrink-0 border-t border-[#1e1e1e]">
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl px-4 py-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about Melkias..."
              className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-opacity disabled:opacity-30"
              style={{ backgroundColor: '#fd5900' }}
            >
              <FiSend className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
