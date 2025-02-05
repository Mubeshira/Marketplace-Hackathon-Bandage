// "use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import { ClerkProvider } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";



// const inter = Inter({ subsets: ["latin"] });



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] =useState(true);
//   useEffect(() => {
//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [pathname]);
//   const isStudio = pathname.startsWith("/studio");
//   const isHome = pathname.startsWith("/sign-in");
//   const isAdmin = pathname.startsWith("/admin");
//   const isOrders = pathname.startsWith("/orders");
//   const isCustomers = pathname.startsWith("/customers");
//   const isStatistics = pathname.startsWith("/product-data");
//   const isReviews = pathname.startsWith("/reviews");
//   const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders &&
//    !isCustomers && !isStatistics && !isReviews

   
  
//   return (
//     <ClerkProvider>
//     <html lang="en">
    
//       <body className={inter.className}>
    
        
//         {children}
      
//       </body>
//     </html>
//     </ClerkProvider >
//   );
// }


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";



// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
     
//       <body className={inter.className}>
      
        
        
        
//         {children}
      
       

//       </body>
//     </html>
//   );
// }


"use client"
import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change

  // const isStudio = pathname.startsWith("/studio");
  // const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  const studioAndHome = !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          <Toaster richColors />
         {children}
        
        </body>
      </html>
    </ClerkProvider>
  );
}