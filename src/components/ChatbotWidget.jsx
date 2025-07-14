import { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
  <div className="fixed bottom-6 right-6 z-50 group">
    <a
      href="https://ai-chatbot-nqy97xgif-sunny-songs-projects.vercel.app/chatbot/29"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AI about Sunny"
    >
      <button className="w-14 h-14 text-2xl rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition cursor-pointer">
        🤖
      </button>
    </a>

    {/* Tooltip */}
    <div className="absolute right-16 bottom-2 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-3 py-1 rounded shadow-md whitespace-nowrap">
      Meet Sunny's AI assistant 🤖
    </div>
  </div>
</>

  );
};

export default ChatbotWidget;
