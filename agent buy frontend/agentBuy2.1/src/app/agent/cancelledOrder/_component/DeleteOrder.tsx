import { AlertTriangle, X } from "lucide-react";
type Delete = {
  handleFalseDelete: () => void;
};
export const DeleteOrder = (props: Delete) => {
  const { handleFalseDelete } = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 min-[640px]:p-4">
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={handleFalseDelete}
      />
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-[320px] min-[640px]:max-w-100 rounded-xl min-[640px]:rounded-2xl p-4 min-[640px]:p-6 shadow-2xl dark:shadow-gray-900/50 animate-in fade-in zoom-in duration-200">
        <button
          className="absolute top-3 right-3 min-[640px]:top-4 min-[640px]:right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={handleFalseDelete}
        >
          <X className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-gray-400 dark:text-gray-500" />
        </button>

        <div className="flex justify-center mb-3 min-[640px]:mb-4">
          <div className="w-12 h-12 min-[640px]:w-16 min-[640px]:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 min-[640px]:w-8 min-[640px]:h-8 text-red-500 dark:text-red-400" />
          </div>
        </div>

        <div className="text-center mb-4 min-[640px]:mb-6">
          <h3 className="text-lg min-[640px]:text-xl font-bold text-gray-900 dark:text-white mb-1.5 min-[640px]:mb-2">
            Захиалга устгах
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs min-[640px]:text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              username
            </span>
            -ийн захиалгыг устгахдаа итгэлтэй байна уу?
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-[10px] min-[640px]:text-xs mt-1.5 min-[640px]:mt-2">
            Энэ үйлдлийг буцаах боломжгүй.
          </p>
        </div>

        <div className="flex gap-2 min-[640px]:gap-3">
          <button
            className="flex-1 py-2 min-[640px]:py-3 px-3 min-[640px]:px-4 rounded-lg min-[640px]:rounded-xl text-xs min-[640px]:text-sm font-semibold 
          bg-gray-100 dark:bg-gray-700 
          text-gray-700 dark:text-gray-200 
          hover:bg-gray-200 dark:hover:bg-gray-600 
          transition-all"
            onClick={handleFalseDelete}
          >
            Цуцлах
          </button>
          <button
            className="flex-1 py-2 min-[640px]:py-3 px-3 min-[640px]:px-4 rounded-lg min-[640px]:rounded-xl text-xs min-[640px]:text-sm font-semibold 
          bg-red-500 dark:bg-red-600 
          text-white 
          hover:bg-red-600 dark:hover:bg-red-700 
          shadow-lg shadow-red-200 dark:shadow-red-900/30 
          hover:shadow-red-300 dark:hover:shadow-red-900/50 
          transition-all"
          >
            Устгах
          </button>
        </div>
      </div>
    </div>
  );
};
