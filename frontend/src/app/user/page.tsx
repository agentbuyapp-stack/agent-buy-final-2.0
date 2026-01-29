"use client";
import { useState } from "react";
import { NewOrderBtn } from "./_features/NewOrderBtn";
import { OrderResult } from "./_component/OrderResult";
import { AddNewOrder } from "./_component/AddNewOrder";
import { EditOrder } from "./_component/EditOrder";
import { DeleteOrder } from "./_component/DeleteOrder";
import { SuccessCard } from "./_component/SuccesCard";
import { Header } from "./_component/Header";
import { data } from "motion/react-client";

export default function HomePage() {
  const [addOrder, setAddOrder] = useState(false);
  const [editOrder, setEditOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);
  const [succesOrder, setSuccesOrder] = useState(false);
  const [getOrderId, setGetOrderId] = useState();
  const [newCreateOrder, setNewCreateOrder] = useState();
  const getdata = async () => {
    const data = await fetch("http://localhost:3000/api/user-orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "bearer",
      },
    });
    const jsonData = await data.json();
    setGetOrderId(jsonData);
  };
  const [loading, setLoading] = useState(false);
  // const handleCreateOrder = async()=>{
  //   setLoading(true);
  //   try{
  //     const res = await fetch("http://localhost:3000/api/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         accept: "application/json",
  //         Authorization: "bearer"
  //       },
  //       body: JSON.stringify({

  //       })
  //     })
  //     const
  //   }
  // }
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      <main className=" flex flex-col items-center pt-6 min-[640px]:pt-10 px-3 min-[640px]:px-4 pb-8">
        <div className="w-full max-w-85 min-[640px]:max-w-5xl bg-white dark:bg-gray-800 rounded-xl min-[640px]:rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col items-center px-3 min-[640px]:px-6 gap-4 min-[640px]:gap-6 py-4 min-[640px]:py-6 transition-colors duration-300">
          <NewOrderBtn
            handleAddNewOrder={() => {
              setAddOrder(true);
            }}
          />

          <OrderResult
            handleEditOrder={() => {
              setEditOrder(true);
            }}
            handleDeleteOrder={() => {
              setDeleteOrder(true);
            }}
          />

          <button
            className="h-11 min-[640px]:h-12 w-full max-w-85 min-[640px]:max-w-4xl flex bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg min-[640px]:rounded-xl text-white text-sm min-[640px]:text-base font-semibold justify-center items-center cursor-pointer transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
            onClick={() => {
              setAddOrder(true);
            }}
          >
            Захиалга үүсгэх
          </button>
        </div>
      </main>
      {addOrder && (
        <AddNewOrder
          handleFalseNewOrder={() => {
            setAddOrder(false);
          }}
        />
      )}
      {editOrder && (
        <EditOrder
          handleFalseEditOrder={() => {
            setEditOrder(false);
          }}
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
