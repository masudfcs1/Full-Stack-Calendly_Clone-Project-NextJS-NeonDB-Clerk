import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: "Schedulr",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        {/* Header */}
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white ">
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}
