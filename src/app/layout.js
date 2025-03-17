import "./globals.css";

export const metadata = {
  title: "Help Save Toha's Life - Medical Donation Campaign",
  description:
    "Support Toha's urgent heart operation by donating. Every contribution helps.",
  keywords: "medical donation, child heart operation, fundraising, medical campaign",

  // Open Graph Metadata (For Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Help Save Toha's Life",
    description: "Toha needs urgent heart surgery. Your support can save his life!",
    url: "https://toha-donation.vercel.app", // Your website URL
    siteName: "Save Toha's Life",
    images: [
      {
        url: "https://i.imgur.com/cTqXc8W.jpeg", // Direct image URL
        width: 1200,
        height: 630,
        alt: "Toha's Medical Fundraising Campaign",
      },
    ],
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image", // Large image preview
    title: "Help Save Toha's Life",
    description: "Toha needs urgent heart surgery. Your support can save his life!",
    images: ["https://i.imgur.com/cTqXc8W.jpeg"], // Direct image URL
    url: "https://toha-donation.vercel.app",
    siteName: "Save Toha's Life",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags for Facebook, LinkedIn, WhatsApp */}
        <meta property="og:title" content="Help Save Toha's Life - Medical Donation Campaign" />
        <meta property="og:description" content="Toha needs urgent heart surgery. Your support can save his life!" />
        <meta property="og:image" content="https://i.imgur.com/cTqXc8W.jpg" />
        <meta property="og:url" content="https://toha-donation.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Toha's Life" />

        {/* WhatsApp-specific meta tag (same as Open Graph) */}
        <meta property="og:image:secure_url" content="https://i.imgur.com/cTqXc8W.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Help Save Toha's Life" />
        <meta name="twitter:description" content="Toha needs urgent heart surgery. Your support can save his life!" />
        <meta name="twitter:image" content="https://i.imgur.com/cTqXc8W.jpg" />
        <meta name="twitter:url" content="https://toha-donation.vercel.app" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
