import Image from "next/image"

export function PatientDetails() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="">
            <div className="flex flex-col gap-2 h-full">
              <div>
                <Image src="/toha.jpeg" alt="Toha's photo" width={400} height={200} className="object-fit rounded-lg" />
              </div>
              <Image src="/toha1.jpeg" alt="Toha's photo" width={400} height={200} className="object-fit rounded-lg" />
              {/* <Image src="/toha2.jpeg" alt="Toha's photo" width={400} height={300} className=" rounded-lg" /> */}
            </div>

          </div>
        </div>
        <div className="md:w-2/3 h-full">
          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-amber-100 text-gray-700 font-bold px-4 py-2 rounded-full">
                বয়সঃ
                <span className="text-red-700 font-medium"> ২ বছর ১১ মাস</span>
              </div>
              <div className="bg-amber-100 text-gray-700 font-bold px-4 py-2 rounded-full">
                অসুস্থতার ধরণঃ
                <span className="text-red-700 font-medium"> গুরুতর হৃদরোগ</span>
              </div>
              {/* <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-700 font-medium">অপারেশনের তারিখ: এখনও নির্ধারিত হয়নি</span>
              </div> */}
            </div>
            <p className="text-gray-800 mb-4">
              ত্বহা ২ বছর ১১ মাসের বয়সের একটি শিশু। জন্মের পরপরই তার জটিল হৃদরোগ (Congenital Heart Defect) ধরা পড়ে, যার জন্য সে সবসময় চিকিৎসকের পর্যবেক্ষণে রয়েছে।
            </p>
            <p className="text-gray-700 mb-2">
              অবস্থা খুবই সংকটাপন্ন। সম্প্রতি তার শারীরিক অবস্থার অবনতি ঘটেছে, এবং ডাক্তাররা জানিয়েছেন যে অবিলম্বে অপারেশন প্রয়োজন তার হৃদযন্ত্র ঠিক করতে। এই অপারেশন তার জীবন বাঁচানোর জন্য অত্যন্ত জরুরি, যা তাকে একটি সুস্থ ও স্বাভাবিক ভবিষ্যৎ উপহার দিতে পারে। যদিও এই সার্জারির সময় তার জীবনের ঝুঁকি রয়েছে।
            </p>
            <p className="text-gray-800 mb-4">
              অপারেশন, হাসপাতাল খরচ এবং চিকিৎসার জন্য মোট <span className="text-red-500 font-semibold">৫ লাখ ৮০ হাজার টাকা</span> প্রয়োজন। ইতোমধ্যে ত্বহার পরিবার ও আত্মীয়স্বজনের প্রচেষ্টায় <span className="text-red-500 font-semibold">২ লাখ টাকা</span> সংগ্রহ করা হয়েছে, যা দিয়ে তার প্রাথমিক অপারেশনের খরচ আংশিকভাবে মেটানো সম্ভব।
            </p>
            <p className="text-gray-800 mb-4">
              তবে ডাক্তাররা জানিয়েছেন, অপারেশনের পর ত্বহার হৃদযন্ত্রের স্বাভাবিক কার্যক্রম বজায় রাখার জন্য তার শরীরে <span className="text-red-500 font-semibold">পেসমেকার বসানো প্রয়োজন</span>। আর এই পেসমেকার স্থাপনের জন্য <span className="text-red-500 font-semibold">৩ লাখ ৫০ হাজার থেকে ৪ লাখ টাকা</span> অতিরিক্ত প্রয়োজন হবে।
            </p>
            <p className="text-gray-800 mb-4">
              আপনার সামান্য সাহায্যও ত্বহার জীবন বাঁচাতে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে। আসুন, আমরা সবাই মিলে ত্বহার জন্য নতুন একটি জীবন গড়ে তুলি।
            </p>

          </div>
        </div>
      </div>
    </section >
  )
}
