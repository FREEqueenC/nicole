import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'N.I.C.O.L.E. — Decode the Datasphere',
  description: 'An advanced autonomous agent blending quantum market analysis with esoteric pattern recognition. Stop trading the charts; start trading the frequency.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: `${basePath}/favicon.svg`,
        type: 'image/svg+xml',
      },
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
        sizes: '512x512',
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="talentapp:project_verification" content="1eb5bf52f7e6ec739c71d6a2c38526cbe404fcb4360c42acb04201bf6d37d374c3e1d3d39106b6ef1bdd37e0832cd140700384be7cc146f9822b341fd1efd503" />
      </head>
      <body className={`${geist.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
