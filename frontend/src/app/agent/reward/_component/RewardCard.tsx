"use client";
import { Gift, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import { RewardModal } from "./RewardModal";
export const RewardCard = () => {
  const [getReward, setGetReward] = useState(false);
  return (
    <div className="border border-zinc-200 dark:border-gray-600 shadow-xl dark:shadow-gray-900/50 w-full max-w-[320px] min-[640px]:max-w-85 h-35 min-[640px]:h-45 rounded-lg min-[640px]:rounded-xl flex flex-col p-3 min-[640px]:p-4 bg-white dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 min-[640px]:gap-3">
          <div className="relative">
            <img
              className="w-10 h-10 min-[640px]:w-12 min-[640px]:h-12 rounded-lg min-[640px]:rounded-xl object-cover ring-2 ring-green-100 dark:ring-green-900/50 shadow-sm"
              src="/alipay.png"
              alt="User"
            />
          </div>
          <div>
            <p className="text-gray-900 dark:text-white font-bold text-sm min-[640px]:text-lg">
              Username
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] min-[640px]:text-xs">
              Захиалга #12345
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-green-50 dark:bg-green-900/30 px-1.5 min-[640px]:px-2 py-0.5 min-[640px]:py-1 rounded-full">
          <Gift className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5 text-green-500 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400 text-[10px] min-[640px]:text-xs font-medium">
            +5,000₮
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 min-[640px]:gap-2 mt-3 min-[640px]:mt-4">
        <span className="px-2 min-[640px]:px-3 py-0.5 min-[640px]:py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] min-[640px]:text-xs font-medium rounded-full">
          Урамшуулал орлоо
        </span>
        <span className="text-gray-300 dark:text-gray-600 text-[10px] min-[640px]:text-xs">
          •
        </span>
        <span className="text-gray-400 dark:text-gray-500 text-[10px] min-[640px]:text-xs">
          Дөнгөж сая
        </span>
      </div>

      <button
        className="group relative flex justify-center items-center gap-1.5 min-[640px]:gap-2 mt-auto py-2 min-[640px]:py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() => {
          setGetReward(true);
        }}
      >
        <Sparkles className="relative z-10 w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-blue-500 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
        <span className="relative z-10 text-blue-500 dark:text-blue-400 text-xs min-[640px]:text-sm font-semibold">
          Урамшуулал авах
        </span>
      </button>
      {getReward && (
        <RewardModal
          onClose={() => {
            setGetReward(false);
          }}
        />
      )}
    </div>
  );
};
