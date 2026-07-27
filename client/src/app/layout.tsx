import type { Metadata } from "next";
import { DataProvider } from "@/context/DataContext";
import { AdmissionProvider } from "@/components/AdmissionContext";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhubaneswar Engineering College (BEC) | Best Private Engineering College in Odisha",
  description: "Bhubaneswar Engineering College (BEC) is a top private B.Tech, MBA & Diploma college in Bhubaneswar, Odisha. Offering AICTE approved courses, 100% placement assistance, world-class labs, and budget-friendly fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <DataProvider>
          <AdmissionProvider>
            <LenisProvider>
              <CustomCursor />
              {children}
            </LenisProvider>
          </AdmissionProvider>
        </DataProvider>
      </body>
    </html>
  );
}
