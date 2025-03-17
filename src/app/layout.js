import "./globals.css";

export const metadata = {
  title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন - মেডিকেল ডোনেশন ক্যাম্পেইন",
  description: "ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।",
  keywords: "medical donation, child heart operation, fundraising, medical campaign",

  // Open Graph Metadata (For Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন",
    description: "ত্বহার জরুরী হার্টের অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান",
    url: "https://toha-donation.vercel.app",
    siteName: "Save Toha's Life",
    images: [
      {
        url: "https://github.com/jobayer109/Toha-donation/blob/main/public/toha.jpeg?raw=true",
        width: 300,
        height: 300,
        alt: "Toha's Image",
      },
    ],
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "ত্বহার জীবন বাঁচাতে এগিয়ে আসুন",
    description: "ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।",
    images: ["https://github.com/jobayer109/Toha-donation/blob/main/public/toha.jpeg?raw=true"],
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
        <meta property="og:image" content="https://github.com/jobayer109/Toha-donation/blob/main/public/toha.jpeg?raw=true" />
        <meta property="og:url" content="https://toha-donation.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Toha's Life" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ত্বহার জীবন বাঁচাতে এগিয়ে আসুন" />
        <meta name="twitter:description" content="ত্বহার জরুরী অপারেশনের খরচ জোগাতে তার পাশে দাঁড়ান; আপনার সহায়তা জীবন বদলে দিতে পারে।" />
        <meta name="twitter:image" content="https://github.com/jobayer109/Toha-donation/blob/main/public/toha.jpeg?raw=true" />
        <meta name="twitter:url" content="https://toha-donation.vercel.app" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
