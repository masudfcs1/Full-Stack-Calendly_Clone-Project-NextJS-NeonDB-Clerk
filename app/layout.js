import Footer from "@/components/footer";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
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
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={`inter.className`}>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white ">
              {children}
            </main>
          </body>
          {/* <Footer /> */}
        </html>
      </ClerkProvider>
    </>
  );
}
