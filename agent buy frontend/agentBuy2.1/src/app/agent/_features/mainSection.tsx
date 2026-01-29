"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../_components/cards";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const MainSection = () => {
  const [openOrders, setOpenOrders] = useState([]);
  const status = "published";
  const openOrdersData = async () => {
    console.log(status);
    try {
      const data = await (
        await fetch(`${BACKEND_URL}/api/user-orders/status/${status}`, {
          method: "GET",
        })
      ).json();
      setOpenOrders(data.data);
    } catch (err) {
      console.error("CLIENT ERROR:", err);
    }
  };
  useEffect(() => {
    openOrdersData();
  }, []);
  console.log("OPEN ORDERS:", openOrders);

  return (
    <div className="w-full h-full flex flex-col gap-5 p-6 dark:bg-gray-900">
      <p className="text-2xl font-bold tracking-tight">Нээлттэй захиалгууд</p>
      <div className="grid gap-2 grid-cols-1 min-[375px]:grid-cols-1 min-[375px]:overflow-y-auto min-[640px]:grid-cols-2 min-[640px]:overflow-y-auto min-[768px]:grid-cols-1 min-[768px]:overflow-y-auto min-[1024px]:grid-cols-2 min-[1024px]:overflow-y-auto min-[1280px]:grid-cols-3 min-[1280px]:overflow-y-auto min-[1536px]:grid-cols-4 min-[1536px]:overflow-y-auto justify-items-center">
        {openOrders.map((o, index) => {
          return <Card key={index} data={o} />;
        })}
      </div>
    </div>
  );
};
