"use client";
import {
  Building2,
  CheckCheck,
  CheckCircle2,
  Copy,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
export const PriceInfMore = () => {
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("5018881234");
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };
  return (
    <>
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          <CreditCard
            size={16}
            className="text-green-600 dark:text-green-400"
          />
          Төлбөрийн мэдээлэл
        </h3>
        <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800/50">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Нийт барааны үнэ:
              </span>
              <span className="font-semibold text-gray-800 dark:text-white">
                6,400,000₮
              </span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-gray-600 dark:text-gray-400">Карго:</span>
              <span className="font-semibold text-gray-800 dark:text-white">
                Odod cargo
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          <Building2 size={16} className="text-green-600 dark:text-green-400" />
          Төлбөр шилжүүлэх данс
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-green-300 dark:border-green-900/50 rounded-lg overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-white dark:bg-gray-100 rounded flex items-center justify-center">
              <Building2 className="text-blue-600" size={16} />
            </div>
            <div className="text-white">
              <p className="font-bold text-sm">Хаан банк</p>
            </div>
          </div>

          <div className="p-3 space-y-3">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Дансны дугаар
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-lg font-bold text-gray-800 dark:text-white tracking-wide">
                  5018 8812 34
                </div>
                <button
                  className={`w-9 h-9 rounded flex items-center justify-center transition-all shrink-0 ${
                    copiedAccount
                      ? "bg-green-500 dark:bg-green-600 text-white"
                      : "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white"
                  }`}
                  onClick={handleCopyAccount}
                >
                  {copiedAccount ? (
                    <CheckCheck size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Данс эзэмшигч
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                <p className="font-bold text-gray-800 dark:text-white text-sm">
                  AgentBuy ХХК
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Шилжүүлэх дүн
              </p>
              <div className="bg-linear-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded p-3 text-center">
                <p className="text-2xl font-bold text-white">7,040,000₮</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Гүйлгээний утга
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700/50 rounded p-2">
                <p className="font-mono font-bold text-gray-800 dark:text-yellow-300 text-sm">
                  utasnii dugaar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800/50">
        <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2 text-sm">
          <CheckCircle2
            className="text-blue-600 dark:text-blue-400"
            size={16}
          />
          Төлбөр төлөх заавар
        </h4>
        <ol className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="w-5 h-5 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
              1
            </span>
            <span>
              Дансны дугаар руу{" "}
              <strong className="text-gray-900 dark:text-white">
                7,040,000₮
              </strong>{" "}
              шилжүүлнэ үү
            </span>
          </li>
          <li className="flex gap-2">
            <span className="w-5 h-5 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
              2
            </span>
            <span>
              Гүйлгээний утгад{" "}
              <strong className="text-red-600 dark:text-red-400">
                ORDER#1
              </strong>{" "}
              бичнэ үү
            </span>
          </li>
          <li className="flex gap-2">
            <span className="w-5 h-5 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
              3
            </span>
            <span>Төлбөр 2-5 минутын дотор баталгаажна</span>
          </li>
          <li className="flex gap-2">
            <span className="w-5 h-5 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
              4
            </span>
            <span>
              Асуудал гарвал{" "}
              <strong className="text-blue-600 dark:text-blue-400">чат</strong>{" "}
              хэсгээр холбогдоно уу
            </span>
          </li>
        </ol>
      </div>
    </>
  );
};
