"use client";
import { FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PriceInf } from "./PriceInf";
import { ShowReportAgent } from "./ShowReportAgent";
import { OrderMoreReport } from "./OrderMoreReport";
import { ChatBot } from "@/app/_components/ChatBot";
import { useUser } from "@clerk/nextjs";

type MyProps = {
  data: {
    _id: string;
  };
};
type ChatRoom = {
  _id: string;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const Card = ({ data }: MyProps) => {
  const { user } = useUser();

  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);

  const createChatRoom = async () => {
    try {
      const room = await (
        await fetch(`${BACKEND_URL}/chat/createChatRoom`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            members: [user?.id, data._id],
          }),
        })
      ).json();
      setChatRoom(room.OLD_ROOM);
      setChatBot(true);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(chatRoom, "dsvbiefbvierbfnvijerfbnvijefbns");

  const [sendReport, setSendReport] = useState(false);
  const handleSendReport = () => {
    setSendReport(!sendReport);
  };
  const handleFalseReportClick = () => {
    setSendReport(false);
  };
  const [orderMore, setOrderMore] = useState(false);
  const handleOrderMore = () => {
    setOrderMore(!orderMore);
  };
  const handleFalseOrderMore = () => {
    setOrderMore(false);
  };
  const [priceInf, setPriceInf] = useState(false);
  const handlePriceInf = () => {
    setPriceInf(!priceInf);
  };
  const handleFalsePriceInf = () => {
    setPriceInf(false);
  };
  const [chatBot, setChatBot] = useState(false);
  return (
    <div className="border border-zinc-200 dark:border-gray-600 shadow-xl dark:shadow-gray-900/50 w-full max-w-[320px] min-[640px]:max-w-85 h-40 min-[640px]:h-45 rounded-lg min-[640px]:rounded-xl flex flex-col p-3 min-[640px]:p-4 bg-white dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl object-cover ring-blue-100 shadow-sm"
              src="/alipay.png"
              alt="User"
            />
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg dark:text-white">
              Username
            </p>
            <p className="text-gray-400 text-xs">Захиалга #12345</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 min-[640px]:mt-3">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-100 ">
          Шинэ захиалга
        </span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-gray-400 text-xs">2 цагийн өмнө</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button
          className="py-2 rounded-md text-xs font-semibold flex justify-center items-center cursor-pointer gap-1
    bg-purple-50 text-purple-600 hover:bg-purple-100 hover:scale-105
    dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
          onClick={createChatRoom}
        >
          <MessageCircle size={14} />
          <span>Чат</span>
        </button>

        <button
          className="py-2 rounded-md text-xs font-semibold flex flex-col justify-center items-center cursor-pointer
      bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105
      dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
          onClick={handleSendReport}
        >
          <FileText size={14} />
          <span>Тайлан илгээх</span>
        </button>
      </div>
      {sendReport && (
        <ShowReportAgent
          handleFalseReportClick={handleFalseReportClick}
          handleOrderMore={handleOrderMore}
          handlePriceInf={handlePriceInf}
          InfTitle="Мэдээлэл оруулах"
        />
      )}
      {orderMore && (
        <OrderMoreReport
          handleFalseOrderMore={handleFalseOrderMore}
          handlePriceInf={handlePriceInf}
          text="Мэдээлэл оруулах"
        />
      )}
      {priceInf && <PriceInf handleFalsePriceInf={handleFalsePriceInf} />}
      {chatBot && chatRoom && (
        <ChatBot
          handleFalseClick={() => {
            setChatBot(false);
          }}
          chatRoomId={chatRoom._id}
        />
      )}
    </div>
  );
};
