import "./globals.css"


export const metadata = {
  title: "Help Save Toha's Life - Medical Donation Campaign",
  description:
    "Support Toha's urgent heart operation by donating to her medical fund. Every contribution brings her closer to a healthy life.",
  keywords: "medical donation, child heart operation, fundraising, medical campaign",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}



