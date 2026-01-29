"use client";
import { useState } from "react";
import { Package, Calendar, Clock, Pencil, Trash2 } from "lucide-react";
import { NewOrderBtn } from "./_features/NewOrderBtn";
import { AddNewOrder } from "./_component/AddNewOrder";
import { EditOrder } from "./_component/EditOrder";
import { DeleteOrder } from "./_component/DeleteOrder";
import { SuccessCard } from "./_component/SuccesCard";
import { Header } from "./_component/Header";
// import { useUser } from "@clerk/nextjs"; // Clerk түр унтраасан

// TODO: MongoDB дээрх user-ийн clerkId-г энд оруулна уу
const TEST_CLERK_ID = "user_38udzvCWMQvs5LMB5Z504AKMRNB"; // pureverdenej94@gmail.com

type PreorderItem = {
  id: string;
  productName: string;
  description: string;
  imageUrls: string[];
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log("BACKEND_URL:", BACKEND_URL);

export default function HomePage() {
  const [addOrder, setAddOrder] = useState(false);
  const [editOrder, setEditOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);
  const [succesOrder, setSuccesOrder] = useState(false);
  const [preorderItems, setPreorderItems] = useState<PreorderItem[]>([]);
  const [editingItem, setEditingItem] = useState<PreorderItem | null>(null);
  const [loading, setLoading] = useState(false);
  // const { user } = useUser(); // Clerk түр унтраасан

  const handleAddToPreorder = (item: Omit<PreorderItem, "id">) => {
    const newItem: PreorderItem = {
      ...item,
      id: Date.now().toString(),
    };
    setPreorderItems((prev) => [...prev, newItem]);
  };

  const handleRemoveFromPreorder = (id: string) => {
    setPreorderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdatePreorder = (updatedItem: PreorderItem) => {
    setPreorderItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleCreateOrder = async () => {
    if (preorderItems.length === 0) return;

    setLoading(true);
    try {
      const promises = preorderItems.map((item) =>
        fetch(`${BACKEND_URL}/api/user-orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            clerkId: TEST_CLERK_ID,
            productName: item.productName,
            description: item.description,
            imageUrls: item.imageUrls,
          }),
        })
      );

      const results = await Promise.all(promises);
      const allSuccess = results.every((res) => res.ok);

      if (allSuccess) {
        setPreorderItems([]);
        setSuccesOrder(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      <main className=" flex flex-col items-center pt-6 min-[640px]:pt-10 px-3 min-[640px]:px-4 pb-8">
        <div className="w-full max-w-85 min-[640px]:max-w-5xl bg-white dark:bg-gray-800 rounded-xl min-[640px]:rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col items-center px-3 min-[640px]:px-6 gap-4 min-[640px]:gap-6 py-4 min-[640px]:py-6 transition-colors duration-300">
          <NewOrderBtn
            handleAddNewOrder={() => {
              setAddOrder(true);
            }}
          />

          {preorderItems.map((item, index) => (
            <div
              key={item.id}
              className="h-16 min-[640px]:h-20 w-full max-w-85 min-[640px]:max-w-4xl bg-white dark:bg-gray-900/50 rounded-lg min-[640px]:rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300 flex justify-between px-3 min-[640px]:px-6 py-3 min-[640px]:py-4 items-center border border-gray-100 dark:border-gray-600 group hover:border-blue-200 dark:hover:border-blue-600"
            >
              <div className="flex items-center gap-2 min-[640px]:gap-4">
                <div className="relative">
                  <div className="w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg min-[640px]:rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center flex flex-col items-center">
                      <Package className="w-3 h-3 min-[640px]:w-5 min-[640px]:h-5 text-white mb-0.5 hidden min-[640px]:block" />
                      <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 min-[640px]:gap-1">
                  <p className="text-xs min-[640px]:text-lg font-bold text-gray-800 dark:text-white">
                    Захиалга #{index + 1} ({item.productName})
                  </p>
                  <div className="flex items-center gap-2 min-[640px]:gap-3 text-[9px] min-[640px]:text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-0.5 min-[640px]:gap-1">
                      <Calendar className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
                      <span>Өнөөдөр</span>
                    </div>
                    <div className="flex items-center gap-0.5 min-[640px]:gap-1">
                      <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
                      <span>{new Date().toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 min-[640px]:gap-2">
                <button
                  className="h-8 min-[640px]:h-10 px-2 min-[640px]:px-4 flex items-center gap-1 min-[640px]:gap-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:shadow-blue-900/20 font-medium text-[10px] min-[640px]:text-sm"
                  onClick={() => {
                    setEditingItem(item);
                    setEditOrder(true);
                  }}
                >
                  <Pencil className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
                  <span className="hidden min-[640px]:inline">Засах</span>
                </button>
                <button
                  className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 flex justify-center items-center bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:shadow-red-900/20"
                  onClick={() => handleRemoveFromPreorder(item.id)}
                  title="Устгах"
                >
                  <Trash2 className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4" />
                </button>
              </div>
            </div>
          ))}

          <button
            className="h-11 min-[640px]:h-12 w-full max-w-85 min-[640px]:max-w-4xl flex bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg min-[640px]:rounded-xl text-white text-sm min-[640px]:text-base font-semibold justify-center items-center cursor-pointer transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCreateOrder}
            disabled={loading || preorderItems.length === 0}
          >
            {loading ? "Илгээж байна..." : `Захиалга үүсгэх ${preorderItems.length > 0 ? `(${preorderItems.length})` : ""}`}
          </button>
        </div>
      </main>
      {addOrder && (
        <AddNewOrder
          handleFalseNewOrder={() => {
            setAddOrder(false);
          }}
          handleAddToPreorder={handleAddToPreorder}
        />
      )}
      {editOrder && editingItem && (
        <EditOrder
          handleFalseEditOrder={() => {
            setEditOrder(false);
            setEditingItem(null);
          }}
          editingItem={editingItem}
          handleUpdatePreorder={handleUpdatePreorder}
        />
      )}
      {deleteOrder && (
        <DeleteOrder
          handleFalseDelete={() => {
            setDeleteOrder(false);
          }}
        />
      )}
      {succesOrder && (
        <SuccessCard
          handleFalseSuccess={() => {
            setSuccesOrder(false);
          }}
        />
      )}
    </div>
  );
}
