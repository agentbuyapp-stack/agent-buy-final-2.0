"use client";
import { useState } from "react";
import { Image, X } from "lucide-react";
import { ReloadIcon } from "../_downIcon/ReloadIcon";
import { useUser } from "@clerk/nextjs";
type Add = {
  handleFalseNewOrder: () => void;
};
type Station = {
  newOrderName: string;
  newOrderDescription: string;
  newOrderImages: string[];
};
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const AddNewOrder = (props: Add) => {
  const { handleFalseNewOrder } = props;
  const [orderImgs, setOrderImgs] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
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

  const [loading, setLoading] = useState(false);
  const [addNewOrder, setAddNewOrder] = useState<Station>({
    newOrderName: "",
    newOrderDescription: "",
    newOrderImages: [],
  });
  const { user } = useUser();
  console.log("IMAGE URL:", orderImgs);

  const handleAddNewOrder = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/user-orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          // Authorization: `Bearer`,
        },
        body: JSON.stringify({
          clerkId: user?.id,
          productName: addNewOrder.newOrderName,
          description: addNewOrder.newOrderDescription,
          imageUrls: orderImgs,
        }),
      });
      if (res.ok) {
        setAddNewOrder({
          newOrderName: "",
          newOrderDescription: "",
          newOrderImages: [],
        });
        setLoading(false);
        handleFalseNewOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/20 dark:bg-black/40 backdrop-blur-sm p-3 min-[640px]:p-4">
      <div className="w-full max-w-85 min-[640px]:max-w-lg bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-gray-900/50 flex flex-col justify-center items-center gap-3 min-[640px]:gap-4 p-4 min-[640px]:p-6">
        <div className="w-full flex justify-between items-center">
          <p className="text-[18px] min-[640px]:text-[22px] text-gray-900 dark:text-white font-bold">
            Шинэ захиалга #1
          </p>
          <button
            className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 flex justify-center items-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95"
            onClick={handleFalseNewOrder}
          >
            <X className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <div className="w-full flex flex-col gap-1.5 min-[640px]:gap-2">
          <p className="text-[14px] min-[640px]:text-[16px] text-gray-900 dark:text-white font-medium">
            Барааны нэр
          </p>
          <textarea
            placeholder="Захиалах барааныхаа нэрийг оруулна уу."
            className="w-full h-14 min-[640px]:h-17 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm min-[640px]:text-base p-2.5 min-[640px]:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
            value={addNewOrder.newOrderName}
            onChange={(e) => {
              setAddNewOrder({ ...addNewOrder, newOrderName: e.target.value });
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-1.5 min-[640px]:gap-2">
          <p className="text-[14px] min-[640px]:text-[16px] text-gray-900 dark:text-white font-medium">
            Барааны тайлбар
          </p>
          <textarea
            placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
            className="w-full h-14 min-[640px]:h-17 border border-gray-300  dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm min-[640px]:text-base p-2.5 min-[640px]:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
            value={addNewOrder.newOrderDescription}
            onChange={(e) => {
              setAddNewOrder({
                ...addNewOrder,
                newOrderDescription: e.target.value,
              });
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-2 min-[640px]:gap-3">
          <div className="flex items-center gap-2">
            <p className="text-[14px] min-[640px]:text-[16px] text-gray-900 dark:text-white font-medium">
              Захиалах барааны зураг
            </p>
            <span className="text-xs min-[640px]:text-sm text-gray-500 dark:text-gray-400">
              ({orderImgs.length}/3)
            </span>
          </div>

          <div className="flex gap-2 min-[640px]:gap-3 w-full">
            {orderImgs.map((img, index) => (
              <div
                key={index}
                className="relative w-24 h-24 min-[640px]:w-35 min-[640px]:h-35 rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow dark:shadow-gray-900/50 bg-gray-100 dark:bg-gray-700"
              >
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 dark:group-hover:bg-black/50 transition-colors duration-300" />
                <button
                  className="absolute top-1.5 right-1.5 min-[640px]:top-2 min-[640px]:right-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
                  onClick={() =>
                    setOrderImgs((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <X className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
                </button>
              </div>
            ))}

            {orderImgs.length < 3 && (
              <div className="relative bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 w-24 h-24 min-[640px]:w-35 min-[640px]:h-35 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group shadow-sm hover:shadow-md dark:shadow-gray-900/50">
                <Image className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mb-1 w-5 h-5 min-[640px]:w-7 min-[640px]:h-7" />
                <p className="text-[10px] min-[640px]:text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                  Зураг нэмэх
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleOrderImgUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {uploading && (
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 flex flex-col items-center justify-center rounded-xl">
                    <div className="w-6 h-6 min-[640px]:w-8 min-[640px]:h-8 border-3 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full animate-spin mb-2" />
                  </div>
                )}
              </div>
            )}
          </div>

          {orderImgs.length === 0 && (
            <p className="text-[10px] min-[640px]:text-xs text-gray-400 dark:text-gray-500 italic">
              Та дээд тал нь 3 зураг оруулах боломжтой
            </p>
          )}
        </div>
        <div className="w-full mt-auto">
          <button
            className="w-full h-9 min-[640px]:h-10 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 rounded-lg flex justify-center items-center text-white text-[13px] min-[640px]:text-[14px] font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg dark:shadow-blue-900/30"
            onClick={handleAddNewOrder}
            disabled={loading}
          >
            {loading ? <ReloadIcon /> : "Бараа нэмэх"}
          </button>
        </div>
      </div>
    </div>
  );
};
