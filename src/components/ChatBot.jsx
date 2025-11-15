/* Made by Pranav */
/* thepranavhub.online */

import React, { useState, useEffect, useRef } from "react";
import { askAI } from "../api/aiAssistant";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  // 🟢 Auto welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hello! I’m Rio — Pranav’s AI assistant 🤖. How can I help you today?",
        },
      ]);
    }
  }, [isOpen]);

  // 🔄 Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  // ✉️ Send message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error("Rio Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Oops! Rio couldn’t respond right now 😅" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 🔘 Floating Icon */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="/assets/chatbot.png"
              alt="Chatbot Icon"
              className="w-14 h-14 drop-shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💬 Chat Window */}
      <AnimatePresence mode="wait">
        {isOpen && (
<motion.div
  key="chat"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 40 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="bg-white shadow-xl rounded-2xl border border-gray-300
             w-[72vw] sm:w-[260px] max-w-[260px]
             h-[48vh] sm:h-[330px]             /* ✅ mobile ke liye bada, desktop chhota */
             overflow-hidden fixed bottom-4 right-3 sm:bottom-6 sm:right-6
             z-50 flex flex-col"
>


<div className="flex items-center justify-between bg-black text-white px-3 py-2 font-semibold border-b border-gray-700 shadow-sm">
  <div className="flex items-center gap-2">
    <img
      src="/assets/chatbot.png"
      alt="Rio"
      className="w-6 h-6 rounded-full"
    />
    <span className="text-[13px] tracking-wide">Rio — Pranav’s AI Assistant</span>
  </div>
  <button
    className="text-white hover:text-gray-400 transition text-sm"
    onClick={() => setIsOpen(false)}
  >
    ✕
  </button>
</div>


          {/* 💬 Messages + Input */}
<div className="relative flex flex-col h-full overflow-hidden">
  {/* Messages Scrollable Area */}
  <div
    ref={chatRef}
    className="flex-1 overflow-y-auto p-2 pb-[70px] space-y-2 text-sm 
               scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-smooth"
    style={{ minHeight: "0px" }} // 🧠 prevents flexbox auto-grow
  >
    {messages.map((msg, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-2 rounded-lg ${
          msg.sender === "user"
            ? "bg-black text-white ml-auto max-w-[80%]"
            : "bg-gray-200 text-black mr-auto max-w-[80%]"
        }`}
      >
        {msg.text}
      </motion.div>
    ))}

    {loading && (
      <p className="text-center text-gray-500 italic">Rio is typing...</p>
    )}

    {/* Spacer ensures scroll bottom */}
    <div className="h-4"></div>
  </div>

  {/* Input Bar (fixed bottom inside) */}
  <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 bg-white p-2 flex items-center">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      placeholder="Ask Rio anything..."
      className="flex-1 text-sm p-2 outline-none bg-transparent"
    />
    <button
      onClick={sendMessage}
      className="bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-transform"
    >
      Send
    </button>
  </div>
</div>
</motion.div> )} </AnimatePresence> </div> ); }