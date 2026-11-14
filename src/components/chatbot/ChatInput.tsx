
import { useState, type FormEvent } from "react";
import { ArrowUp, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({
  onSend,
  disabled = false,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) return;

    onSend(trimmedMessage);
    setMessage("");
  };

  return (
    <div className="chat-input-wrapper">
      <form
        className="chat-input-container"
        onSubmit={handleSubmit}
      >
        <div className="input-icon">
          <Paperclip size={17} />
        </div>

        <input
          type="text"
          placeholder={
            disabled
              ? "AI is thinking..."
              : "Ask anything about Jatin..."
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          maxLength={1000}
          aria-label="Type your message"
        />

        <button
          type="submit"
          className="send-button"
          disabled={disabled || !message.trim()}
          aria-label="Send message"
        >
          <ArrowUp size={19} />
        </button>
      </form>

      <p className="input-hint">
        Press <kbd>Enter</kbd> to send your message
      </p>
    </div>
  );
};

export default ChatInput;
