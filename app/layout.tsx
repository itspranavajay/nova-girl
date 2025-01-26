import "./globals.css"
import { Inter, Dancing_Script } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({ subsets: ["latin"] })

export const metadata = {
  title: "My Love for Nova",
  description: "A romantic proposal website for Nova",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-pink-100 to-purple-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

