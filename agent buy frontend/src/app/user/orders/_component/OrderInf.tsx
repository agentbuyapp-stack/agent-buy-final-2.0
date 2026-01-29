"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { OneOrderReport } from "./OneOrderReport";

export const OrderInf = () => {
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 min-[640px]:p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-[640px]:gap-2 flex-1 min-w-0">
            <span className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 bg-green-500 dark:bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] min-[640px]:text-xs font-bold shrink-0">
              1
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-gray-800 dark:text-white text-xs min-[640px]:text-sm truncate">
                iPhone 15 Pro Max
              </p>
            </div>
          </div>
          <button
            className="text-[10px] min-[640px]:text-xs text-green-600 dark:text-green-400 font-bold rounded-md px-2 py-1.5 min-[640px]:p-2 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 hover:scale-105 cursor-pointer transition-all flex items-center gap-1 shrink-0"
            onClick={() => setShowReport(true)}
          >
            <span>Тайлан харах</span>
            <ChevronRight className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
          </button>
        </div>
      </div>
      {showReport && (
        <OneOrderReport
          handleFalseShowReport={() => {
            setShowReport(false);
          }}
        />
      )}
    </>
  );
};
