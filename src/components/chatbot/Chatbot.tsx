
import "./chatbot.css";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow, { type Message } from "./ChatWindow";

const API_URL = "http://localhost:5000/api/chat";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Jatin's AI assistant. I can help you explore his technical skills, professional experience, projects, and development journey. What would you like to know?",
      sender: "ai",
    },
  ]);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.reply,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I'm having trouble connecting right now. Please try again in a moment.",
          sender: "ai",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          loading={loading}
          onSend={handleSendMessage}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* Animated Chatbot Button */}
      <button
        type="button"
        className={`chatbot-toggle ${
          isOpen ? "chatbot-toggle-active" : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <MessageCircle size={26} />
        )}

        {!isOpen && (
          <>
            {/* Green notification indicator */}
            <span className="toggle-notification" />

            {/* Hover tooltip */}
            <span className="chatbot-tooltip">
              Chat with my AI Assistant
            </span>
          </>
        )}
      </button>

    </div>
  );
};

export default Chatbot;
