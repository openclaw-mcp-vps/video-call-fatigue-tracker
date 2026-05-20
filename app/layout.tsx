import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingHealth – Track and optimize team meeting health metrics",
  description: "Integrates with calendar apps to track meeting patterns, identifies fatigue indicators, and suggests optimal meeting schedules for remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc9a1c32-c476-486c-b53e-37f1d7a24d97"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
