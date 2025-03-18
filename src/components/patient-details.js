import Image from "next/image";
import { useState } from "react";

export function PatientDetails() {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <section className="mb-12 relative">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="flex flex-col gap-2 h-full">
            <Image src="/toha.jpeg" alt="Toha's photo" width={400} height={200} className="object-fit rounded-lg" />
            <Image src="/toha1.jpeg" alt="Toha's photo" width={400} height={200} className="object-fit rounded-lg" />
          </div>
        </div>
        <div className="md:w-2/3 h-full">
          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-amber-100 text-gray-700 font-bold px-4 py-2 rounded-full">
                বয়সঃ <span className="text-red-700 font-medium">২ বছর ১১ মাস</span>
              </div>
              <div className="bg-amber-100 text-gray-700 font-bold px-4 py-2 rounded-full">
                অসুস্থতার ধরণঃ <span className="text-red-700 font-medium">গুরুতর হৃদরোগ (VSD)</span>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              ত্বহা ২ বছর ১১ মাসের বয়সের একটি শিশু। জন্মের পরপরই তার জটিল হৃদরোগ (Congenital Heart Defect) ধরা পড়ে, যার জন্য সে সবসময় চিকিৎসকের পর্যবেক্ষণে রয়েছে।
            </p>
            <p className="text-gray-700 mb-2">
              অবস্থা খুবই সংকটাপন্ন। সম্প্রতি তার শারীরিক অবস্থার অবনতি ঘটেছে, এবং ডাক্তাররা জানিয়েছেন যে অবিলম্বে অপারেশন প্রয়োজন তার হৃদযন্ত্র ঠিক করতে। এই অপারেশন তার জীবন বাঁচানোর জন্য অত্যন্ত জরুরি, যা তাকে একটি সুস্থ ও স্বাভাবিক ভবিষ্যৎ উপহার দিতে পারে। যদিও এই সার্জারির সময় তার জীবনের ঝুঁকি রয়েছে।
            </p>
            <p className="text-gray-800 mb-4">
              অপারেশন, হাসপাতাল খরচ এবং চিকিৎসার জন্য মোট <span className="text-red-500 font-semibold">৬ লাখ ৩০ হাজার টাকা</span> প্রয়োজন। ইতোমধ্যে ত্বহার পরিবার ও আত্মীয়স্বজনের প্রচেষ্টায় <span className="text-red-500 font-semibold">২ লাখ টাকা</span> সংগ্রহ করা হয়েছে, যা দিয়ে তার প্রাথমিক অপারেশনের খরচ আংশিকভাবে মেটানো সম্ভব।
            </p>
            <p className="text-gray-800 mb-4">
              তবে ডাক্তাররা জানিয়েছেন, অপারেশনের পরেই ত্বহার হৃদযন্ত্রের স্বাভাবিক কার্যক্রম বজায় রাখার জন্য তার শরীরে <span className="text-red-500 font-semibold">পেসমেকার বসানো প্রয়োজন</span>। আর এই পেসমেকার স্থাপনের জন্য <span className="text-red-500 font-semibold">৩ লাখ ৫০ হাজার থেকে ৪ লাখ টাকা</span> অতিরিক্ত প্রয়োজন হবে।
            </p>
            <p className="text-gray-800 mb-6">
              আপনার সামান্য সাহায্বও ত্বহার জীবন বাঁচাতে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে। আসুন, আমরা সবাই মিলে ত্বহার জন্য নতুন একটি জীবন গড়ে তুলি।
            </p>

            <div className="flex justify-center items-center">
              <button
                onClick={() => setShowImageModal(true)}
                className="bg-red-600 text-white px-5 py-1 rounded-lg cursor-pointer hover:bg-amber-700 transition"
              >
                অপারেশনের হিসাব দেখুন
              </button>
            </div>
          </div>
        </div>
      </div>
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-full max-h-full">
            <Image
              src="/doc1.jpeg"
              alt="Toha full image"
              width={1000} // large resolution but will be contained
              height={1000}
              className="rounded-lg object-contain w-full h-auto max-w-[90vw] max-h-[80vh]"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}


      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
