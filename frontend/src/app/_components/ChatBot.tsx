"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, X } from "lucide-react";
type False = {
  handleFalseClick: () => void;
};
export const ChatBot = (props: False) => {
  const [input, setInput] = useState("");
  const { handleFalseClick } = props;
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="inset-0 fixed w-full z-50 bg- flex justify-center items-center bg-black/50 dark:bg-black/70 backdrop-blur-md">
      <div className="flex flex-col h-125 min-[640px]:h-150 w-full max-w-85 min-[640px]:max-w-md bg-white dark:bg-gray-800 rounded-xl min-[640px]:rounded-2xl shadow-2xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-3 min-[640px]:p-4 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center min-[640px]:gap-3">
            <div className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 bg-white/20 backdrop-blur-sm rounded-lg min-[640px]:rounded-xl flex items-center justify-center">
              <Bot className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm min-[640px]:text-base">
                Туслах бот
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-[10px] min-[640px]:text-xs">
                  Онлайн
                </span>
              </div>
            </div>
          </div>
          <button
            className="w-9 h-9 bg-gray-300 rounded-md text-[5px] flex justify-center items-center dark:bg-blue-800 cursor-pointer dark:hover:bg-gray-700 hover:scale-110"
            onClick={handleFalseClick}
          >
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 min-[640px]:p-4 space-y-3 min-[640px]:space-y-4 bg-gray-50 dark:bg-gray-900">
          {/* {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 min-[640px]:gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                message.role === "user"
                  ? "bg-blue-500 dark:bg-blue-600"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {message.role === "user" ? (
                <User className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-white" />
              ) : (
                <Bot className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-gray-600 dark:text-gray-300" />
              )}
            </div>
            <div
              className={`max-w-[75%] px-3 min-[640px]:px-4 py-2 min-[640px]:py-2.5 rounded-xl min-[640px]:rounded-2xl text-xs min-[640px]:text-sm ${
                message.role === "user"
                  ? "bg-blue-500 dark:bg-blue-600 text-white rounded-br-sm min-[640px]:rounded-br-md"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-sm min-[640px]:rounded-bl-md"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))} */}
          {isLoading && (
            <div className="flex gap-2 min-[640px]:gap-3">
              <div className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 min-[640px]:p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Мессеж бичих..."
              className="flex-1 px-3 min-[640px]:px-4 py-2 min-[640px]:py-2.5 rounded-lg min-[640px]:rounded-xl text-sm
              bg-gray-100 dark:bg-gray-700 
              text-gray-800 dark:text-white 
              placeholder-gray-400 dark:placeholder-gray-500
              border border-transparent
              focus:border-blue-500 dark:focus:border-blue-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
              transition-all"
              disabled={isLoading}
            />
            <button
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 min-[640px]:w-11 min-[640px]:h-11 rounded-lg min-[640px]:rounded-xl 
              bg-blue-500 dark:bg-blue-600 
              hover:bg-blue-600 dark:hover:bg-blue-700 
              disabled:bg-gray-300 dark:disabled:bg-gray-600 
              disabled:cursor-not-allowed
              flex items-center justify-center 
              transition-all hover:scale-105 active:scale-95"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
