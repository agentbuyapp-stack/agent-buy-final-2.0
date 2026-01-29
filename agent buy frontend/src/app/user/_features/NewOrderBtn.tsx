import { Package, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
type NewOrder = {
  handleAddNewOrder: () => void;
};
export const NewOrderBtn = (props: NewOrder) => {
  const { handleAddNewOrder } = props;
  return (
    <>
      <div className="h-14 min-[640px]:h-24 w-full max-w-85 min-[640px]:max-w-4xl flex justify-between items-center bg-gradient-to-r dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:border-0 from-white to-white rounded-xl min-[640px]:rounded-2xl px-3 min-[640px]:px-6 border border-blue-100 shadow-sm">
        <div className="flex items-center gap-2 min-[640px]:gap-4">
          <div className="relative">
            <div className="w-9 h-9 min-[640px]:w-16 min-[640px]:h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl min-[640px]:rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <ShoppingBag className="text-white w-4 h-4 min-[640px]:w-6 min-[640px]:h-6" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 min-[640px]:-bottom-1 min-[640px]:-right-1 w-4 h-4 min-[640px]:w-6 min-[640px]:h-6 bg-green-500 rounded-full border-2 min-[640px]:border-3 border-white shadow-md flex items-center justify-center">
              <Plus className="text-white w-2.5 h-2.5 min-[640px]:w-4 min-[640px]:h-4" />
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm min-[640px]:text-3xl font-bold text-gray-800 dark:text-white">
              Шинэ захиалга үүсгэх
            </h2>
            <p className="text-[9px] min-[640px]:text-xs text-gray-500 flex items-center gap-1 dark:text-white">
              <Sparkles className="text-yellow-500 w-2.5 h-2.5 min-[640px]:w-3 min-[640px]:h-3" />
              Барааны мэдээлэл оруулна уу
            </p>
          </div>
        </div>
        <button
          className="w-8 h-8 min-[640px]:w-13 min-[640px]:h-13 bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] flex justify-center items-center rounded-xl min-[640px]:rounded-2xl cursor-pointer transition-all duration-200 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
          onClick={handleAddNewOrder}
        >
          <Plus className="text-white w-4 h-4 min-[640px]:w-6 min-[640px]:h-6" />
        </button>
      </div>
    </>
  );
};
