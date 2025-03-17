import "./globals.css";

export const metadata = {
  title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন - মেডিকেল ডোনেশন ক্যাম্পেইন",
  description: "ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।",
  keywords: "medical donation, child heart operation, fundraising, medical campaign",

  // Open Graph Metadata (For Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন",
    description: "ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; সেটার পরিমাণ যতই কম হোক।",
    url: "https://toha-donation.vercel.app", // Your website URL
    siteName: "Save Toha's Life",
    images: [
      {
        url: "https://i.imgur.com/p1M3SuP.jpg", // ✅ FIXED Direct image URL
        width: 1200,
        height: 630,
        alt: "ত্বহার জন্য মেডিকেল সহায়তা ক্যাম্পেইন",
      },
    ],
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন",
    description: "ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।",
    images: ["https://i.imgur.com/p1M3SuP.jpg"], // ✅ FIXED Direct image URL
    url: "https://toha-donation.vercel.app",
    siteName: "Save Toha's Life",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags for Facebook, LinkedIn, WhatsApp */}
        <meta property="og:title" content="ত্বহার জীবন বাঁচাতে এগিয়ে আসুন - মেডিকেল ডোনেশন ক্যাম্পেইন" />
        <meta property="og:description" content="ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।" />
        <meta property="og:image" content="https://i.imgur.com/p1M3SuP.jpg" /> {/* ✅ FIXED */}
        <meta property="og:url" content="https://toha-donation.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Toha's Life" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ত্বহার জীবন বাঁচাতে এগিয়ে আসুন" />
        <meta name="twitter:description" content="ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।" />
        <meta name="twitter:image" content="https://i.imgur.com/p1M3SuP.jpg" /> {/* ✅ FIXED */}
        <meta name="twitter:url" content="https://toha-donation.vercel.app" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
