import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The River & The Dam",
  description: "I spent two years trying to free AI. Then I realised I had the whole thing wrong.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
