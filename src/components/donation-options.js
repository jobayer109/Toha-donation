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
            { id: "bkash", name: "বিকাশ", logo: "/bkash.svg", number: "01734133910" },
            { id: "nagad", name: "নগদ", logo: "/nagad.png", number: "01734133910" },
            { id: "rocket", name: "রকেট", logo: "/rocket.png", number: "XXXXXXXXXX" },
          ].map((method) => (
            <div
              key={method.id}
              className={`flex items-center p-3 border rounded-lg transition-colors border-gray-400`}
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
        <label className="block text-gray-700 font-bold mb-2">ব্যাংক ট্রান্সফার</label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-1">
            ইসলামী ব্যাংক, বাংলাদেশ
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">একাউন্টঃ</span> Toha&apos;s Medical Fund
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">একাউন্ট নাম্বারঃ</span> <span className="text-amber-700">pending</span>
          </p>

        </div>
      </div>



      <p className="mt-4 text-md text-red-800 text-center">
        আপনার দান ত্বহার জীবন জন্য সরাসরি সহায়তা করবে।
      </p>
    </div>
  )
}
