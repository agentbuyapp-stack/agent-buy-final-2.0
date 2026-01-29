type Delete = {
  handleFalseDelete: () => void;
};
export const DeleteOrder = (props: Delete) => {
  const { handleFalseDelete } = props;
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-[320px] min-[640px]:max-w-100 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border flex flex-col items-center justify-center gap-4 min-[640px]:gap-6 p-5 min-[640px]:p-6 animate-in fade-in zoom-in duration-200">
        <div className="w-12 h-12 min-[640px]:w-16 min-[640px]:h-16 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-6 h-6 min-[640px]:w-8 min-[640px]:h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="w-full flex flex-col items-center text-center gap-1 min-[640px]:gap-2">
          <p className="text-[15px] min-[640px]:text-[17px] text-gray-500 font-medium dark:text-white">
            Захиалга #1
          </p>
          <p className="text-[17px] min-[640px]:text-[20px] font-bold text-gray-800 dark:text-white">
            Та устгахдаа итгэлтэй байна уу?
          </p>
          <p className="text-xs min-[640px]:text-sm text-gray-500 mt-1 dark:text-white">
            Энэ үйлдлийг буцаах боломжгүй
          </p>
        </div>
        <div className="w-full flex gap-2 min-[640px]:gap-3">
          <button
            className="flex-1 flex justify-center items-center h-10 min-[640px]:h-11 rounded-lg border-2 border-gray-300 bg-white dark:bg-gray-900 dark:border-0 dark:hover:bg-gray-600 dark:text-white hover:bg-gray-50 text-gray-700 text-sm min-[640px]:text-base font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm"
            onClick={handleFalseDelete}
          >
            Цуцлах
          </button>
          <button className="flex-1 flex justify-center items-center h-10 min-[640px]:h-11 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm min-[640px]:text-base font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Устгах
          </button>
        </div>
      </div>
    </div>
  );
};
