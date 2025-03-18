"use client"

import { CountdownTimer } from "@/components/countdown-timer"
import { DocumentGallery } from "@/components/document-gallery"
import { DonationOptions } from "@/components/donation-options"
import { PatientDetails } from "@/components/patient-details"
import { FaEnvelope, FaPhone, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import Image from "next/image"
import { useState, useEffect } from "react";


export default function Home() {
  const [currentUrl, setCurrentUrl] = useState("https://toha-donation.vercel.app/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-400 via-red-100/10 to-red-500">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden py-12">
        <div className="absolute inset-0 bg-black z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Child in need of medical help"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold tracking-tight leading-tight bg-clip-text text-white  mb-4">
            <span className="bg-gradient-to-l from-white to-red-500 text-transparent bg-clip-text font-semibold">&apos;ত্বহা&apos;র জীবন বাঁচাতে এগিয়ে আসুন</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            আপনার সহায়তায় ত্বহা পেতে পারে নতুন জীবন
          </p>
          <a
            href="#donate"
            className="mt-8 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg border border-white"
          >
            ডোনেট করতে এখানে ক্লিক করুন
          </a>

          <div className="mt-3">
            <p className="text-md text-amber-400">অথবা, </p>
            <p className="text-emerald-500 text-2xl font-bold mb-2">শেয়ার করুন</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>

              {/* Messenger Share */}
              {/* <a
                href={`https://messenger.com/sharer.php?u=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700"
              >
                <FaFacebookMessenger />
              </a> */}


              {/* WhatsApp Share */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️\n\n" + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-3 rounded-lg hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

              {/* LinkedIn Share */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-3 py-3 rounded-lg hover:bg-blue-800"
              >
                <FaLinkedin />
              </a>

              {/* Twitter Share */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                target="_blank"
                rel="noopener noreferrer"

                className="bg-blue-400 text-white px-3 py-3 rounded-lg hover:bg-blue-500"
              >
                <FaTwitter />
              </a>


            </div>
          </div>
        </div>

      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Urgency Bar */}
        <div className="bg-red-50 border-l-8 border-red-500 p-3 mb-12 rounded shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-amber-800 font-medium">
              <span className="font-bold text-red-500 text-md"> ঘোষণা:</span> অপারেশনের তারিখ - আগামী ৯ই এপ্রিল ২০২৫
            </p>
            <CountdownTimer targetDate="2025-04-09T00:00:00" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - 3/5 */}
          <div className="lg:col-span-3">
            <PatientDetails />
            <div className="w-full mx-auto mt-20">
              <h3 className="text-2xl text-center md:text-left font-semibold mb-4">মেডিকেল ডকুমেন্টস</h3>
              <DocumentGallery />
            </div>
          </div>

          {/* Right Column - 2/5 */}
          <div className="lg:col-span-2" id="donate">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-8">
              <button
                type="button"
                className="w-full py-4 mb-5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                নিচের নাম্বারে আপনার সাহায্য পাঠান
              </button>              <DonationOptions />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-gradient-to-r from-black via-black/50 to-black text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* About Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                এই ক্যাম্পেইন সম্পর্কে
              </h3>
              <p className="leading-relaxed">
                ত্বহার বাবা-মা তার জীবন রক্ষার জরুরি অপারেশনের খরচ যোগাতে এই ক্যাম্পেইন শুরু করেছেন। আপনার অনুদান সরাসরি ত্বহার চিকিৎসায় সহায়তা করবে এবং তার বেঁচে থাকার আশাকে আরও শক্তিশালী করবে।
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                যোগাযোগ
              </h3>
              <p className="text-blue-100 flex items-center justify-center md:justify-start mt-2">
                <FaPhone className="mr-2" />
                <a href="tel:+8801619786462" className="hover:underline mr-2">01619786462</a> (বাবা-মা)
              </p>
              <p className="text-blue-100 flex items-center justify-center md:justify-start mt-2">
                <FaPhone className="mr-2" />
                <a href="tel:+8801734053116" className="hover:underline mr-2">01734053116</a> (যোবায়ের)
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                কিভাবে সাহায্য করতে পারেন?
              </h3>
              <div className="flex flex-col space-y-3 text-lg text-center md:text-left">
                <a href="#donate" className=" text-white rounded-lg hover:bg-red-600 ‍animate-pulse">
                  <span className="animate-pulse font-bold text-xl">Donate Now ❤️</span>
                </a>

                {/* Social Share Buttons */}
                {/* Social Share Buttons */}
                <p className="text-gray-300">শেয়ার করুন:</p>
                <div className="flex space-x-3 justify-center md:justify-start">
                  {/* Facebook Share */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>

                  {/* Messenger Share */}
                  {/* <a
                    href={`https://messenger.com/sharer.php?u=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700"
                  >
                    <FaFacebookMessenger />
                  </a> */}


                  {/* WhatsApp Share */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️\n\n" + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-3 rounded-lg hover:bg-green-600"
                  >
                    <FaWhatsapp />
                  </a>

                  {/* LinkedIn Share */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-3 py-3 rounded-lg hover:bg-blue-800"
                  >
                    <FaLinkedin />
                  </a>

                  {/* Twitter Share */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("ত্বহার হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান 🙏❤️")}`}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="bg-blue-400 text-white px-3 py-3 rounded-lg hover:bg-blue-500"
                  >
                    <FaTwitter />
                  </a>


                </div>

              </div>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="mt-12 pt-6 border-t border-white text-center text-white text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Help Toha&apos;s Heart Campaign. All Rights Reserved. </p>
            <p className="mt-1 text-gray-300">Developed by <span className="">Jobayer Ahmed</span></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
