"use client"

import { useState } from "react"
import Image from "next/image"
import { LuCopy } from "react-icons/lu";

export function DonationOptions() {

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setToastMessage("কপি হয়েছে");
    setShowToast(true);
    setClickedId(id);

    setTimeout(() => {
      setShowToast(false);
      setClickedId(null);
    }, 1500);
  };



  return (
    <div>
      <div className="mb-6 relative">
        <div className="space-y-3">
          {[
            { id: "bkash", name: "বিকাশ", logo: "/bkash.svg", number: "01758841475" },
            { id: "nagad", name: "নগদ", logo: "/nagad.png", number: "01758841475" },
            { id: "rocket", name: "রকেট", logo: "/rocket.png", number: "01758841475" },
          ].map((method) => (
            <div
              key={method.id}
              className="flex items-center p-3 border rounded-lg transition-colors border-gray-400"
            >
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src={method.logo}
                  alt={`${method.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{method.name}</p>
                <p className="text-md text-gray-900 font-bold">
                  {method.number}
                </p>
              </div>
              <button
                onClick={() => handleCopy(method.number, method.id)}
                className={`px-2  rounded transition-transform cursor-pointer bg-red-500 hover:bg-gray-200 ${clickedId === method.id ? "scale-90" : "scale-100"
                  }`}
                title="Copy number"
              >
                <span className="text-white text-xs ">Copy</span>
              </button>
            </div>
          ))}
        </div>

        {/* Tiny toast notification */}
        {showToast && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white text-sm px-4 py-1 rounded shadow-md animate-fade-in-out">
            {toastMessage}
          </div>
        )}

        <style jsx>{`
        @keyframes fade-in-out {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-out {
          animation: fade-in-out 1.5s ease-in-out forwards;
        }
      `}</style>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">ব্যাংক ট্রান্সফার</label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm font-bold text-gray-700 mb-1">
            ইসলামী ব্যাংক বাংলাদেশ লিমিটেড
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">একাউন্টঃ</span> <span className="text-red-700">Monira Begum</span>
          </p>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm text-gray-700">
              <span className="font-medium">একাউন্ট নাম্বারঃ</span>{" "}
              <span className="text-red-700 text-md font-bold">
                20508640200030009
              </span>
            </p>
            <button
              onClick={() => handleCopy("20508640200030009")}
              className="px-3 py-1 mt-[-3] rounded bg-red-500 text-white text-xs transition-transform cursor-pointer active:scale-90"
              title="Copy account number"
            >
              Copy
            </button>

          </div>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium ">শাখাঃ</span> <span className="text-red-700 text-md">সুন্দরগঞ্জ, গাইবান্ধা</span>
          </p>

        </div>
      </div>



      <p className="mt-4 text-md text-red-800 text-center">
        আপনার দান ত্বহার জীবন বাঁচাতে সরাসরি ভূমিকা রাখবে।
      </p>
    </div>
  )
}
