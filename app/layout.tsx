import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loophole — 24/7 Live Analysis Notepad for Solo-Entrepreneurs",
  description:
    "Loophole is the AI co-founder for solo entrepreneurs. Drop messy notes, voice memos and screenshots — get back decisions, drafts and next steps in real-time.",
  metadataBase: new URL("https://loophole.app"),
  openGraph: {
    title: "Loophole — 24/7 Live Analysis Notepad",
    description:
      "The AI co-founder for solo entrepreneurs. Real-time analysis of every note you take.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-zinc-50 font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
