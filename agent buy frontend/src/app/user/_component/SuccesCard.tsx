type Success = {
  handleFalseSuccess: () => void;
};
export const SuccessCard = (props: Success) => {
  const { handleFalseSuccess } = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[320px] min-[640px]:max-w-125 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 min-[640px]:p-10 flex flex-col items-center gap-4 min-[640px]:gap-6 animate-in fade-in zoom-in duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-linear-to-br from-green-400 to-green-600 rounded-full p-4 min-[640px]:p-6">
            <svg
              className="w-10 h-10 min-[640px]:w-16 min-[640px]:h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="text-center space-y-1 min-[640px]:space-y-2">
          <h3 className="text-xl min-[640px]:text-2xl font-bold text-gray-800">
            Амжилттай!
          </h3>
          <p className="text-sm min-[640px]:text-base text-gray-600 dark:text-white">
            Таны захиалга амжилттай хийгдлээ
          </p>
        </div>
        <button
          onClick={handleFalseSuccess}
          className="w-full py-2.5 min-[640px]:py-3 px-6 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm min-[640px]:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
};
