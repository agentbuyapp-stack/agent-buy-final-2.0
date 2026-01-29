import { ShoppingBag, X } from "lucide-react";
type ShowReportAgent = {
  handleFalseReportClick: () => void;
  handleOrderMore: () => void;
  handlePriceInf: () => void;
  InfTitle: string;
};
export const ShowReportAgent = (props: ShowReportAgent) => {
  const { handleFalseReportClick, handleOrderMore, handlePriceInf, InfTitle } =
    props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="w-162.5 max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        <div className="bg-linear-to-r from-blue-500 to-blue-600 dark:bg-linear-to-r dark:from-blue-900/50 dark:to-blue-900/50 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="text-white ">
              <h2 className="text-lg font-bold">Захиалгын дэлгэрэнгүй</h2>
              <p className="text-xs text-white/90">Нийт 5 бараа</p>
            </div>
          </div>
          <button
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
            onClick={handleFalseReportClick}
          >
            <X className="text-white" size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-0 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-bold text-gray-800 truncate dark:text-white">
                    iPhone 15 Pro Max
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs shrink-0 cursor-pointer dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800/50 hover:scale-105"
                    onClick={handleOrderMore}
                  >
                    Дэлгэрэнгүй харах
                  </button>
                  <button
                    className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs shrink-0 cursor-pointer dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800/50 hover:scale-105"
                    onClick={handlePriceInf}
                  >
                    {InfTitle}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-0">
          <button
            className="w-full py-2.5 bg-linear-to-r from-blue-500 to-blue-600 dark:bg-linear-to-r dark:from-blue-900/50 dark:to-blue-900/50 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-800/50 dark:hover:to-blue-800/50 text-white rounded-lg font-semibold transition-all hover:scale-103 shadow-md text-sm"
            onClick={handleFalseReportClick}
          >
            Тайлан илгээх
          </button>
        </div>
      </div>
    </div>
  );
};
