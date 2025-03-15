"use client"

import { useState } from "react"
import Image from "next/image"

export function DonationOptions() {
  const [amount, setAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("bkash")

  const handleAmountClick = (value) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setAmount(0)
  }

  return (
    <div>
      <div className="mb-6">
        <div className="space-y-3">
          {[
            { id: "bkash", name: "bKash", logo: "/bkash.svg", number: "017XXXXXXXX" },
            { id: "nagad", name: "Nagad", logo: "/nagad.png", number: "018XXXXXXXX" },
            { id: "rocket", name: "Rocket", logo: "/rocket.png", number: "019XXXXXXXX" },
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
              {/* <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                {paymentMethod === method.id && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Bank Transfer</label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">Bank Name:</span> International Bank
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">Account Name:</span> Toha&apos;s Medical Fund
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">Account Number:</span> 017XXXXXXXX
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Branch:</span> Main Branch
          </p>
        </div>
      </div>



      <p className="mt-4 text-sm text-gray-500 text-center">
        Your donation will directly help fund Toha&apos;s life-saving heart operation
      </p>
    </div>
  )
}
