import { ShoppingBag, X } from "lucide-react";
type ShowDetailsClick = {
    showDetialsClick: () => void;
};
export const ShowDetails = (props: ShowDetailsClick) => {
    const { showDetialsClick } = props;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-3 min-[640px]:p-4">
            <div className="w-full max-w-85 min-[640px]:max-w-162.5 max-h-[85vh] min-[640px]:max-h-[90vh] bg-white rounded-xl min-[640px]:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
                <div className="bg-linear-to-r from-blue-500 to-blue-600 p-3 min-[640px]:p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 min-[640px]:gap-3">
                        <div className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-base min-[640px]:text-lg font-bold">
                                Захиалгын дэлгэрэнгүй
                            </h2>
                            <p className="text-[10px] min-[640px]:text-xs text-white/90">
                                Нийт 5 бараа
                            </p>
                        </div>
                    </div>
                    <button
                        className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                        onClick={showDetialsClick}
                    >
                        <X className="text-white w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 min-[640px]:p-4">
                    <div className="space-y-2">
                        <div className="bg-white border border-gray-200 rounded-lg p-2.5 min-[640px]:p-3 hover:border-blue-300 hover:shadow-md transition-all">
                            <div className="flex gap-2 min-[640px]:gap-3 items-center">
                                <div className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                    <span className="text-xs min-[640px]:text-sm font-bold text-white">
                                        1
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base min-[640px]:text-xl font-bold text-gray-800 truncate">
                                        iPhone 15 Pro Max
                                    </h4>
                                </div>
                                <div className="px-1.5 min-[640px]:px-2 py-0.5 min-[640px]:py-1 bg-blue-100 text-blue-700 font-bold rounded text-[10px] min-[640px]:text-xs shrink-0">
                                    2x
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 min-[640px]:p-4 bg-gray-50 border-t border-gray-200">
                    <button
                        className="w-full py-2 min-[640px]:py-2.5 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md text-xs min-[640px]:text-sm"
                        onClick={showDetialsClick}
                    >
                        Хаах
                    </button>
                </div>
            </div>
        </div>
    );
};
