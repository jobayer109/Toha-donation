"use client"

import { useState } from "react"
import Image from "next/image"

export function DonationOptions() {
  const [paymentMethod, setPaymentMethod] = useState("bkash")




  return (
    <div>
      <div className="mb-6">
        <div className="space-y-3">
          {[
            { id: "bkash", name: "বিকাশ", logo: "/bkash.svg", number: "017XXXXXXXX" },
            { id: "nagad", name: "নগদ", logo: "/nagad.png", number: "018XXXXXXXX" },
            { id: "rocket", name: "রকেট", logo: "/rocket.png", number: "019XXXXXXXX" },
          ].map((method) => (
            <div
              key={method.id}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${paymentMethod === method.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                }`}
              onClick={() => setPaymentMethod(method.id)}
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
                <p className="text-sm text-gray-900">{method.number.replace(/'/g, "&apos;")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">ব্যাংক ট্রান্সফার</label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-1">
            ইসলামী ব্যাংক, বাংলাদেশ
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">একাউন্টঃ</span> Toha&apos;s Medical Fund
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">একাউন্ট নাম্বারঃ</span> 017XXXXXXXX
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">ব্রাঞ্চঃ</span> Main Branch
          </p>
        </div>
      </div>



      <p className="mt-4 text-sm text-gray-500 text-center">
        আপনার দান ত্বহার জীবন রক্ষাকারী হৃদযন্ত্রের অপারেশনের জন্য সরাসরি সহায়তা করবে।
      </p>
    </div>
  )
}
