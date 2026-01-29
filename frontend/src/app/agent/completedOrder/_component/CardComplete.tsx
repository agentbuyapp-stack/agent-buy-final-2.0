"use client";
import { CheckCircle, FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import { SuccessReport } from "./SuccessReport";
import { ChatBot } from "@/app/_components/ChatBot";
export const CardComplete = () => {
  const [sendReport, setSendReport] = useState(false);
  const handleSendReport = () => {
    setSendReport(!sendReport);
  };
  const handleFalsePriceInf = () => {
    setSendReport(false);
  };
  const [chatBot, setChatBot] = useState(false);
  return (
    <div className="border border-zinc-200 dark:border-gray-600 shadow-xl dark:shadow-gray-900/50 w-full max-w-[320px] min-[640px]:max-w-85 h-40 min-[640px]:h-45 rounded-lg min-[640px]:rounded-xl flex flex-col p-3 min-[640px]:p-4 bg-white dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl object-cover shadow-sm
            ring-blue-100 dark:ring-blue-900"
              src="/alipay.png"
              alt="User"
            />
          </div>
          <div>
            <p
              className="font-bold text-lg
          text-gray-900 dark:text-white"
            >
              Username
            </p>
            <p
              className="text-xs
          text-gray-400 dark:text-gray-500"
            >
              Захиалга #12345
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 min-[640px]:mt-3">
        <span
          className="px-3 py-1 text-xs font-medium rounded-full
      bg-green-50 text-green-600
      dark:bg-green-900/50 dark:text-green-400"
        >
          Амжилттай
        </span>
        <span
          className="text-xs
      text-gray-300 dark:text-gray-600"
        >
          •
        </span>
        <span
          className="text-xs
      text-gray-400 dark:text-gray-500"
        >
          2 цагийн өмнө
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button
          className="py-2 rounded-md text-xs font-semibold flex justify-center items-center cursor-pointer gap-1 transition-all hover:scale-105
      bg-purple-50 text-purple-600 hover:bg-purple-100
      dark:bg-purple-900/50 dark:text-purple-400 dark:hover:bg-purple-800/50"
          onClick={() => {
            setChatBot(true);
          }}
        >
          <MessageCircle size={14} />
          <span>Чат</span>
        </button>
        <button
          className="py-2 rounded-md text-xs font-semibold flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-105
        bg-blue-50 text-blue-600 hover:bg-blue-100
        dark:bg-blue-900/50 dark:text-blue-400 dark:hover:bg-blue-800/50"
          onClick={handleSendReport}
        >
          <FileText size={14} />
          <span>Тайлан харах</span>
        </button>
      </div>
      {sendReport && (
        <SuccessReport handleFalsePriceInf={handleFalsePriceInf} />
      )}
      {chatBot && (
        <ChatBot
          handleFalseClick={() => {
            setChatBot(false);
          }}
        />
      )}
    </div>
  );
};
