
import { useEffect, useRef } from "react";
import {
  Bot,
  Sparkles,
  X,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  FolderGit2,
} from "lucide-react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface ChatWindowProps {
  messages: Message[];
  loading: boolean;
  onSend: (message: string) => void;
  onClose: () => void;
}

const suggestions = [
  {
    label: "Technical Skills",
    question: "What are Jatin's technical skills?",
    icon: Code2,
  },
  {
    label: "Projects",
    question: "Tell me about Jatin's projects.",
    icon: FolderGit2,
  },
  {
    label: "Experience",
    question: "Tell me about Jatin's professional experience.",
    icon: BriefcaseBusiness,
  },
];

const ChatWindow = ({
  messages,
  loading,
  onSend,
  onClose,
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="chat-window">

      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-top">
          <div className="chat-brand">
            <div className="chat-avatar">
              <Bot size={23} />
              <span className="avatar-status" />
            </div>

            <div className="chat-brand-info">
              <div className="chat-title-row">
                <h3>Jatin AI</h3>
                <span className="ai-badge">
                  <Sparkles size={10} />
                  AI POWERED
                </span>
              </div>

              <div className="chat-online">
                <span className="online-dot" />
                Online · Ready to assist
              </div>
            </div>
          </div>

          <button
            className="chat-close"
            onClick={onClose}
            aria-label="Close chatbot"
          >
            <X size={19} />
          </button>
        </div>

        <div className="chat-header-description">
          Your personal guide to Jatin's development journey.
        </div>
      </div>

      {/* Messages */}
      <div className="chat-body">

        <div className="chat-date-divider">
          <span>AI ASSISTANT</span>
        </div>

        {messages.map((message, index) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            sender={message.sender}
            isFirst={index === 0 && message.sender === "ai"}
          />
        ))}

        {/* Suggested Questions */}
        {messages.length === 1 && !loading && (
          <div className="suggestions-container">
            <p className="suggestions-label">
              <Sparkles size={13} />
              EXPLORE MORE
            </p>

            {suggestions.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="suggestion-button"
                  onClick={() => onSend(item.question)}
                >
                  <span className="suggestion-icon">
                    <Icon size={16} />
                  </span>

                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={15}
                    className="suggestion-arrow"
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Typing Indicator */}
        {loading && (
          <div className="chat-message ai-message">
            <div className="message-avatar">
              <Bot size={17} />
            </div>

            <div className="typing-indicator">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={onSend} disabled={loading} />

      <div className="chat-footer">
        <Sparkles size={11} />
        Powered by AI · Built by Jatin Sharma
      </div>
    </div>
  );
};

export default ChatWindow;
