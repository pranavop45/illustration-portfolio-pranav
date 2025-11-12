import React, { useState, useEffect } from "react";
import { askAI } from "../api/aiAssistant";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // ✉️ Send message through OpenRouter AI (frontend only)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(input); // ✅ direct frontend AI call
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
             w-[72vw] sm:w-80 max-w-[270px] 
             h-[42vh] sm:h-auto 
             overflow-hidden fixed bottom-4 right-3 sm:bottom-6 sm:right-6 
             z-50"



          >
            {/* Header */}
            <div className="flex items-center justify-between bg-black text-white p-3 font-bold">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/chatbot.png"
                  alt="Rio"
                  className="w-7 h-7 rounded-full"
                />
                <span>Rio — Pranav’s AI Assistant</span>
              </div>
              <button
                className="text-white hover:text-gray-400 transition"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="p-2 h-[30vh] sm:h-64 overflow-y-auto space-y-2 text-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

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
                <p className="text-center text-gray-500 italic">
                  Rio is typing...
                </p>
              )}
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-300">
              <input
                className="flex-1 px-3 py-2 outline-none text-sm"
                placeholder="Ask Rio anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className={`px-3 py-2 font-semibold transition ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
