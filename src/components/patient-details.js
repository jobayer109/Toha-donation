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
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">বয়সঃ ২ বছর ১১ মাস</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-red-700 font-medium">অসুস্থতার ধরণঃ গুরুতর হৃদরোগ সমস্যা</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-700 font-medium">অপারেশনের তারিখ: এখনও নির্ধারিত হয়নি</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              ত্বহা ২ বছর ১১ মাসের বয়সের একটি শিশু। জন্মের পরপরই তার জটিল হৃদরোগ (Congenital Heart Defect) ধরা পড়ে, যার জন্য সে সবসময় চিকিৎসকের পর্যবেক্ষণে রয়েছে।
            </p>
            <p className="text-gray-700 mb-2">অবস্থা খুবই সংকটাপন্ন।
              সম্প্রতি তার শারীরিক অবস্থার অবনতি ঘটেছে, এবং ডাক্তাররা জানিয়েছেন যে অবিলম্বে অপারেশন প্রয়োজন তার হৃদযন্ত্র ঠিক করতে। এই সার্জারি তার জীবন রক্ষার জন্য অত্যন্ত জরুরি, যা তাকে একটি সুস্থ, স্বাভাবিক ভবিষ্যৎ উপহার দিতে পারে। যদিওবা এই অপারেশনের সময় তার জীবনের যথেষ্ট ঝুকি রয়েছে। </p>
            <p className="text-gray-700 mb-4"> প্রয়োজনীয় তহবিল:
              অপারেশন, হাসপাতাল খরচ, এবং পরবর্তী চিকিৎসার জন্য মোট ৫ লাখ ৮০ হাজার টাকা প্রয়োজন।
              ত্বহার পরিবার ও আত্মীয়স্বজনের প্রচেষ্টায় এখন পর্যন্ত ২ লাখ টাকা সংগ্রহ করা হয়েছে, কিন্তু বাকি ৩ লাখ ৮০ হাজার টাকার জন্য তারা আপনাদের সহযোগিতা কামনা করছে।</p>
            <p className="text-gray-700 mb-4">
              আপনার সামান্য সহায়তাও ত্বহার জীবনে বিশাল পরিবর্তন আনতে পারে। আসুন, আমরা সবাই মিলে ত্বহার জন্য নতুন একটা জীবন গড়ে দিই।</p>
          </div>
        </div>
      </div>
    </section>
  )
}
