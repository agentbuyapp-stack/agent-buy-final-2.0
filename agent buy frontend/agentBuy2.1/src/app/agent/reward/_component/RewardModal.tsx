"use client";
import { Gift, X, Sparkles, Check } from "lucide-react";

export const RewardModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed z-50 inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex justify-center items-center p-3 min-[640px]:p-4">
      <div className="w-full max-w-75 min-[640px]:max-w-85 bg-white dark:bg-gray-800 rounded-2xl min-[640px]:rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-5 min-[640px]:p-6 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center mb-4 min-[640px]:mb-5">
          <div className="relative">
            <div className="w-14 h-14 min-[640px]:w-16 min-[640px]:h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-green-900/30">
              <Gift className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
              <Check className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5 text-white" />
            </div>
          </div>
        </div>
        <div className="text-center mb-4 min-[640px]:mb-5">
          <h3 className="text-lg min-[640px]:text-xl font-bold text-gray-900 dark:text-white mb-1">
            Амжилттай!
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs min-[640px]:text-sm">
            Урамшуулал таны дансанд орлоо
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 bg-green-50 dark:bg-green-900/30 py-3 min-[640px]:py-4 rounded-xl mb-4 min-[640px]:mb-5">
          <Sparkles className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-green-500 dark:text-green-400" />
          <span className="text-xl min-[640px]:text-2xl font-bold text-green-600 dark:text-green-400">
            +5,000₮
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2.5 min-[640px]:py-3 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold text-sm min-[640px]:text-base transition-all hover:scale-[1.02] active:scale-95"
        >
          Баярлалаа
        </button>
      </div>
    </div>
  );
};
