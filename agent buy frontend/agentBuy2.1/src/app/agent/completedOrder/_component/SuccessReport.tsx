import { DollarSign, Image, LoaderIcon, X } from "lucide-react";
import { useState } from "react";

type Inf = {
  handleFalsePriceInf: () => void;
};
export const SuccessReport = (props: Inf) => {
  const { handleFalsePriceInf } = props;
  const [agentSeeImg, setAgentSeeImg] = useState<string[]>([]);
  const handleSeeReport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (!input.files || input.files.length === 0 || agentSeeImg.length >= 3)
      return;
    const file = input.files[0];

    try {
      const imgUrl = URL.createObjectURL(file);
      setAgentSeeImg((prev) => [...prev, imgUrl]);
      input.value = "";
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md p-3 min-[640px]:p-4">
      <div className="w-full max-w-85 min-[640px]:max-w-lg max-h-[90vh] rounded-xl min-[640px]:rounded-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden flex flex-col bg-white dark:bg-gray-800 animate-in fade-in zoom-in duration-300">
        <div className="p-3 min-[640px]:p-4 flex items-center justify-between shrink-0 bg-linear-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700">
          <div className="flex items-center gap-2 min-[640px]:gap-3">
            <div className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-base min-[640px]:text-lg font-bold">
                Бусад мэдээлэл оруулах
              </h2>
              <p className="text-[10px] min-[640px]:text-xs text-white/90">
                Барааны мэдээлэл
              </p>
            </div>
          </div>
          <button
            className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
            onClick={handleFalsePriceInf}
          >
            <X className="text-white w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 min-[640px]:p-6 space-y-3 min-[640px]:space-y-4">
          <div>
            <label className="block text-xs min-[640px]:text-sm font-semibold mb-1.5 min-[640px]:mb-2 text-gray-700 dark:text-gray-200">
              Барааны үнэ (₮) *
            </label>
            <input
              type="number"
              placeholder="Үнэ оруулна уу"
              className="w-full px-3 min-[640px]:px-4 py-2 min-[640px]:py-2.5 rounded-lg outline-none transition-all text-sm min-[640px]:text-base
            border border-gray-300 dark:border-gray-600 
            focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent
            bg-white dark:bg-gray-700 
            text-gray-800 dark:text-white 
            placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-xs min-[640px]:text-sm font-semibold mb-1.5 min-[640px]:mb-2 text-gray-700 dark:text-gray-200">
              Тэмдэглэл
            </label>
            <textarea
              placeholder="Барааны холбоос, нэмэлт мэдээлэл..."
              rows={3}
              className="w-full px-3 min-[640px]:px-4 py-2 min-[640px]:py-2.5 rounded-lg outline-none transition-all resize-none text-sm min-[640px]:text-base
            border border-gray-300 dark:border-gray-600 
            focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent
            bg-white dark:bg-gray-700 
            text-gray-800 dark:text-white 
            placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-xs min-[640px]:text-sm font-semibold mb-1.5 min-[640px]:mb-2 text-gray-700 dark:text-gray-200">
              Зураг оруулах ({agentSeeImg.length}/3)
            </label>
            <div className="flex gap-2 min-[640px]:gap-3 flex-wrap">
              {agentSeeImg.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 min-[640px]:w-32 min-[640px]:h-32 rounded-lg min-[640px]:rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow dark:shadow-gray-900/50 bg-gray-100 dark:bg-gray-700"
                >
                  <img
                    src={img}
                    alt={`Upload ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 dark:group-hover:bg-black/50 transition-colors duration-300" />
                  <button
                    type="button"
                    className="absolute top-1.5 right-1.5 min-[640px]:top-2 min-[640px]:right-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 rounded-md min-[640px]:rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                    onClick={() =>
                      setAgentSeeImg((prev) =>
                        prev.filter((_, i) => i !== index),
                      )
                    }
                  >
                    <X className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
                  </button>
                </div>
              ))}

              {agentSeeImg.length < 3 && (
                <div
                  className="relative w-24 h-24 min-[640px]:w-32 min-[640px]:h-32 border-2 border-dashed rounded-lg min-[640px]:rounded-xl flex flex-col justify-center items-center cursor-pointer transition-all duration-300 group shadow-sm hover:shadow-md dark:shadow-gray-900/50
              bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 
              border-gray-300 dark:border-gray-600 
              hover:border-blue-500 dark:hover:border-blue-400 
              hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <Image className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 mb-1 transition-colors text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  <p className="text-[10px] min-[640px]:text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Зураг нэмэх
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSeeReport}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              )}
            </div>

            {agentSeeImg.length === 0 && (
              <p className="text-[10px] min-[640px]:text-xs text-gray-400 dark:text-gray-500 italic mt-2">
                Та дээд тал нь 3 зураг оруулах боломжтой
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 min-[640px]:p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shrink-0">
          <button
            className="w-full py-2 min-[640px]:py-2.5 rounded-lg font-semibold transition-all text-xs min-[640px]:text-sm hover:scale-[1.02]
          bg-gray-200 dark:bg-gray-700 
          hover:bg-gray-300 dark:hover:bg-gray-600 
          text-gray-700 dark:text-gray-200"
            onClick={handleFalsePriceInf}
          >
            Цуцлах
          </button>
        </div>
      </div>
    </div>
  );
};
