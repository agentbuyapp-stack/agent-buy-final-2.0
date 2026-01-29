"use client";
import { Image, X } from "lucide-react";
import { useEffect, useState } from "react";
type Edit = {
  handleFalseEditOrder: () => void;
};
export const EditOrder = (props: Edit) => {
  const { handleFalseEditOrder } = props;
  const [orderImgs, setOrderImgs] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [newOrderName, setNewOrderName] = useState("");
  const [newOrderDescription, setNewOrderDescription] = useState("");
  const handleAddOrder = () => {};
  const handleOrderImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (!input.files || input.files.length === 0 || orderImgs.length >= 3)
      return;

    const file = input.files[0];
    setUploading(true);

    try {
      const imgUrl = URL.createObjectURL(file);
      setOrderImgs((prev) => [...prev, imgUrl]);
      input.value = "";
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };
  const [getOrderEdit, setGetOrderEdit] = useState();
  const getData = async () => {
    const data = await fetch("http://localhost:3000/api/user-orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "bearer",
      },
    });
    const jsonData = await data.json();
    setGetOrderEdit(jsonData);
    console.log(getOrderEdit, "get");
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-3 min-[640px]:p-4">
      <div className="w-full max-w-85 min-[640px]:max-w-lg bg-white dark:bg-gray-800 rounded-xl border shadow-xl flex flex-col justify-center items-center gap-3 min-[640px]:gap-4 p-4 min-[640px]:p-6">
        <div className="w-full flex justify-between items-center">
          <p className="text-[18px] min-[640px]:text-[22px] text-black font-bold dark:text-white">
            #1 захиалга засах
          </p>
          <button
            className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 flex justify-center items-center rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 dark:bg-gray-900 dark:hover:bg-gray-600"
            onClick={handleFalseEditOrder}
          >
            <X className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
          </button>
        </div>
        <div className="w-full flex flex-col gap-1.5 min-[640px]:gap-2">
          <p className="text-[14px] min-[640px]:text-[16px] text-black font-medium dark:text-white">
            Барааны нэр
          </p>
          <textarea
            placeholder="Захиалах барааныхаа нэрийг оруулна уу."
            className="w-full h-14 min-[640px]:h-17 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-white text-sm min-[640px]:text-base p-2.5 min-[640px]:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            value={newOrderName}
            onChange={(e) => setNewOrderName(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1.5 min-[640px]:gap-2">
          <p className="text-[14px] min-[640px]:text-[16px] text-black font-medium dark:text-white">
            Барааны тайлбар
          </p>
          <textarea
            placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
            className="w-full h-14 min-[640px]:h-17 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-white text-sm min-[640px]:text-base p-2.5 min-[640px]:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            value={newOrderDescription}
            onChange={(e) => setNewOrderDescription(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2 min-[640px]:gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[14px] min-[640px]:text-[16px] text-black dark:text-white font-medium">
              Захиалах барааны зураг
            </p>
            <span className="text-xs min-[640px]:text-sm text-gray-500">
              ({orderImgs.length}/3)
            </span>
          </div>

          <div className="flex gap-2 min-[640px]:gap-3 w-full">
            {orderImgs.map((img, index) => (
              <div
                key={index}
                className="relative w-24 h-24 min-[640px]:w-35 min-[640px]:h-35 rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 dark:group-hover:bg-black/50 transition-colors duration-300" />
                <button
                  className="absolute top-1.5 right-1.5 min-[640px]:top-2 min-[640px]:right-2 bg-red-500 hover:bg-red-600 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
                  onClick={() =>
                    setOrderImgs((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <X className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
                </button>
              </div>
            ))}

            {orderImgs.length < 3 && (
              <div className="relative bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 dark:border-gray-600 w-24 h-24 min-[640px]:w-35 min-[640px]:h-35 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <Image className="text-gray-400 group-hover:text-blue-500 transition-colors mb-1 w-5 h-5 min-[640px]:w-7 min-[640px]:h-7" />
                <p className="text-[10px] min-[640px]:text-xs text-gray-500 group-hover:text-blue-600 font-medium">
                  Зураг нэмэх
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleOrderImgUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {uploading && (
                  <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-xl">
                    <div className="w-6 h-6 min-[640px]:w-8 min-[640px]:h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-black text-[10px] min-[640px]:text-xs font-medium">
                      Уншиж байна...
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {orderImgs.length === 0 && (
            <p className="text-[10px] min-[640px]:text-xs text-gray-400 italic">
              Та дээд тал нь 3 зураг оруулах боломжтой
            </p>
          )}
        </div>
        <div className="w-full mt-auto">
          <button
            className="w-full h-9 min-[640px]:h-10 bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] rounded-lg flex justify-center items-center text-white text-[13px] min-[640px]:text-[14px] font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            onClick={handleAddOrder}
          >
            Хадгалах
          </button>
        </div>
      </div>
    </div>
  );
};
