// import { Pencil, Trash2, } from "lucide-react";
import { Pencil, Trash2, Package, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
type Click = {
  handleEditOrder: () => void;
  handleDeleteOrder: () => void;
};
export const OrderResult = (props: Click) => {
  const { handleEditOrder, handleDeleteOrder } = props;
  const [getDataOrderName, setGetDataOrderName] = useState();
  const getData = async () => {
    const data = await fetch("http://localhost:3000/api/user-orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer",
      },
    });
    const jsonData = await data.json();
    setGetDataOrderName(jsonData);
    console.log(getDataOrderName);
  };
  useEffect(() => {
    getData;
  }, []);
  return (
    <div className="h-16 min-[640px]:h-20 w-full max-w-85 min-[640px]:max-w-4xl bg-white dark:bg-gray-900/50 rounded-lg min-[640px]:rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300 flex justify-between px-3 min-[640px]:px-6 py-3 min-[640px]:py-4 items-center border border-gray-100 dark:border-gray-600 group hover:border-blue-200 dark:hover:border-blue-600">
      <div className="flex items-center gap-2 min-[640px]:gap-4">
        <div className="relative">
          <div className="w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg min-[640px]:rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300">
            <div className="text-center flex flex-col items-center">
              <Package className="w-3 h-3 min-[640px]:w-5 min-[640px]:h-5 text-white mb-0.5 hidden min-[640px]:block" />
              <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
                #1
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 min-[640px]:gap-1">
          <p className="text-xs min-[640px]:text-lg font-bold text-gray-800 dark:text-white">
            Захиалга #1 (baraanii ner)
          </p>
          <div className="flex items-center gap-2 min-[640px]:gap-3 text-[9px] min-[640px]:text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-0.5 min-[640px]:gap-1">
              <Calendar className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
              <span>Өнөөдөр</span>
            </div>
            <div className="flex items-center gap-0.5 min-[640px]:gap-1">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
              <span>14:30</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 min-[640px]:gap-2">
        <button
          className="h-8 min-[640px]:h-10 px-2 min-[640px]:px-4 flex items-center gap-1 min-[640px]:gap-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:shadow-blue-900/20 font-medium text-[10px] min-[640px]:text-sm"
          onClick={handleEditOrder}
        >
          <Pencil className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
          <span className="hidden min-[640px]:inline">Засах</span>
        </button>
        <button
          className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 flex justify-center items-center bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:shadow-red-900/20"
          onClick={handleDeleteOrder}
          title="Устгах"
        >
          <Trash2 className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4" />
        </button>
      </div>
    </div>
  );
};
