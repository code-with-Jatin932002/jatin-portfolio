
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  sender: "user" | "ai";
  isFirst?: boolean;
}

const ChatMessage = ({
  message,
  sender,
  isFirst = false,
}: ChatMessageProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`chat-message ${
        isUser ? "user-message" : "ai-message"
      } ${isFirst ? "first-ai-message" : ""}`}
    >
      {!isUser && (
        <div className="message-avatar">
          <Bot size={17} />
        </div>
      )}

      <div className="message-content">
        {message}
      </div>

      {isUser && (
        <div className="user-avatar">
          <User size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
