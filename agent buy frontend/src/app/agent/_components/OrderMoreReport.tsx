import { Package, X } from "lucide-react";
type orderMore = {
  handleFalseOrderMore: () => void;
  handlePriceInf: () => void;
  text: string;
};
export const OrderMoreReport = (props: orderMore) => {
  const { handleFalseOrderMore, handlePriceInf, text } = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-linear-to-r from-blue-500 to-blue-600 p-4 dark:bg-linear-to-r  dark:from-blue-900/50 dark:to-blue-900/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-lg font-bold">Барааны мэдээлэл</h2>
              <p className="text-xs text-white/90">baraanii ner</p>
            </div>
          </div>
          <button
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
            onClick={handleFalseOrderMore}
          >
            <X className="text-white" size={20} />
          </button>
        </div>

        <div className="flex-1 flex p-6 gap-4">
          <div className=" bg-gray-100 w-75 h-62.5 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
            <img
              src="./alipay.png"
              alt="orderImgErr"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">
              Барааны нэр
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Тайлбар</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-2  dark:bg-gray-800 dark:border-0">
          <button
            className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg dark:bg-white/20 dark:text-white dark:hover:hover:bg-gray-500 font-semibold transition-all text-sm hover:scale-[1.02]"
            onClick={handleFalseOrderMore}
          >
            Буцах
          </button>
          <button
            className="flex-1 py-2.5 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white dark:hover:from-blue-800/50 dark:hover:to-blue-800/50 rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md text-sm dark:bg-linear-to-r  dark:from-blue-900/50 dark:to-blue-900/50"
            onClick={handlePriceInf}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};
