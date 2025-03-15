import { CountdownTimer } from "@/components/countdown-timer"
import { DocumentGallery } from "@/components/document-gallery"
import { DonationOptions } from "@/components/donation-options"
import { PatientDetails } from "@/components/patient-details"
import { FaEnvelope, FaPhone, FaHeart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-400 via-red-100/10 to-red-500">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
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
            Help Save <span className="bg-gradient-to-l from-white to-red-500 text-transparent bg-clip-text font-semibold">&apos;Toha&apos;s Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Every donation brings us closer to a successful heart operation
          </p>
          <a
            href="#donate"
            className="mt-8 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Donate Now
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Urgency Bar */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-12 rounded shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-amber-800 font-medium">
              <span className="font-bold">Urgent:</span> Toha&apos;s operation is scheduled soon. Your help is needed now.
            </p>
            <CountdownTimer targetDate="2025-04-15T00:00:00" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - 3/5 */}
          <div className="lg:col-span-3">
            <PatientDetails />
            <div className="w-full mx-auto">
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
                Donate Now
              </button>              <DonationOptions />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {/* <section className="mt-20 mb-12">
          <h2 className="text-3xl font-bold text-center mb-10">Messages of Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">
                  &apos;I&apos;m praying for Lily&apos;s speedy recovery. Stay strong, little one!&apos;
                </p>
                <p className="font-semibold text-gray-800">- Sarah Johnson</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>

      {/* Footer */}

      <footer className="bg-gradient-to-r from-black via-black/50 to-black text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* About Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                <FaHeart className="text-red-400 mr-2" /> About This Campaign
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Toha&apos;s parents created this campaign to cover the cost of his urgent heart surgery. 100% of donations go directly to the hospital.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400 mr-2" /> Contact Us
              </h3>
              <p className="text-blue-100 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                <a href="mailto:help.toha@example.com" className="hover:underline">&apos;help.toha@example.com&apos;</a>
              </p>
              <p className="text-blue-100 flex items-center justify-center md:justify-start mt-2">
                <FaPhone className="mr-2" />
                <a href="tel:+8801734053116" className="hover:underline">&apos;+8801734053116&apos;</a>
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                <a href="#" className="text-blue-400 hover:text-white"><FaFacebook /></a>
                <a href="#" className="text-blue-300 hover:text-white"><FaTwitter /></a>
                <a href="#" className="text-pink-400 hover:text-white"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 pt-6 border-t border-white text-center text-white text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Help Toha&apos;s Heart Campaign. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
