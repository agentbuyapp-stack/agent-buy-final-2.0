import {
  AlertCircle,
  Building2,
  CheckCheck,
  CheckCircle2,
  Copy,
  CreditCard,
  FileText,
  Package,
  X,
} from "lucide-react";
import { useState } from "react";
import { OrderInf } from "./OrderInf";
import { PriceInfMore } from "./PriceInfMore";
type ShowReportClick = {
  handleFalseClick: () => void;
};
export const ShowReport = (props: ShowReportClick) => {
  const { handleFalseClick } = props;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md p-3 min-[640px]:p-4">
      <div className="w-full max-w-85 min-[640px]:max-w-162.5 max-h-[90vh] min-[640px]:max-h-[95vh] bg-white dark:bg-gray-800 rounded-xl min-[640px]:rounded-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        <div className="bg-linear-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 p-3 min-[640px]:p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 min-[640px]:gap-3">
            <div className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-base min-[640px]:text-lg font-bold">
                Захиалгын тайлан
              </h2>
              <p className="text-[10px] min-[640px]:text-xs text-white/90">
                Захиалга #1 • 2025-01-08
              </p>
            </div>
          </div>
          <button
            className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
            onClick={handleFalseClick}
          >
            <X className="text-white w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 min-[640px]:p-4 bg-white dark:bg-gray-800">
          <div className="mb-3 min-[640px]:mb-4">
            <h3 className="text-xs min-[640px]:text-sm font-bold text-gray-800 dark:text-white mb-1.5 min-[640px]:mb-2 flex items-center gap-1.5 min-[640px]:gap-2">
              <Package className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-green-600 dark:text-green-400" />
              Барааны жагсаалт
            </h3>
            <OrderInf />
          </div>
          <PriceInfMore />
        </div>
        <div className="p-3 min-[640px]:p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex flex-col min-[640px]:flex-row gap-2">
          <button
            className="flex-1 py-2 min-[640px]:py-2.5 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-lg font-semibold transition-all text-xs min-[640px]:text-sm"
            onClick={handleFalseClick}
          >
            Захиалгыг цуцлах
          </button>
          <button className="flex-1 py-2 min-[640px]:py-2.5 bg-linear-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 hover:from-green-600 hover:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800 text-white rounded-lg font-semibold transition-all shadow-md dark:shadow-green-900/30 flex items-center justify-center gap-1 text-xs min-[640px]:text-sm">
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
