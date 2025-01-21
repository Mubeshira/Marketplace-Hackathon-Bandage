
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Header from "@/components/Header";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

interface IProduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function Wishlist() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  // Load wishlist data from localStorage and handle search query
  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist");
    const updatedWishlist: IProduct[] = wishlistData ? JSON.parse(wishlistData) : [];

    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    // If product details are in the URL, add them to the wishlist
    if (name && price && description && image) {
      const isDuplicate = updatedWishlist.some((item) => item.name === name);

      if (!isDuplicate) {
        updatedWishlist.push({ name, price, description, image, quantity: 1 });
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      router.replace("/wishlist"); // Removes query parameters from the URL
    } else {
      setWishlist(updatedWishlist); // Load wishlist on initial render
    }
  }, [searchParam, router]);

  // Handle removing an item from the wishlist
  const handleRemoveItem = (index: number) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-6 mt-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-65  rounded-t"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col items-start">
                <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
                <p className="text-gray-900 mt-1">${item.price}</p>
                <Button
                  variant="destructive"
                  className="mt-4 flex items-center"
                  onClick={() => handleRemoveItem(index)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";
// import Header from "@/components/Header";
// import { useRouter, useSearchParams } from "next/navigation";
// import Footer from "@/components/Footer";

// interface IProduct {
//   name: string;
//   price: string;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export default function Wishlist() {
//   const router = useRouter();
//   const searchParam = useSearchParams();
//   const [wishlist, setWishlist] = useState<IProduct[]>([]);

//   useEffect(() => {
//     // Check if localStorage is available
//     if (typeof window !== "undefined") {
//       const wishlistData = localStorage.getItem("wishlist");
//       const updatedWishlist: IProduct[] = wishlistData ? JSON.parse(wishlistData) : [];

//       const name = searchParam.get("name");
//       const price = searchParam.get("price");
//       const description = searchParam.get("description");
//       const image = searchParam.get("image");

//       if (name && price && description && image) {
//         const isDuplicate = updatedWishlist.some((item) => item.name === name);

//         if (!isDuplicate) {
//           updatedWishlist.push({ name, price, description, image, quantity: 1 });
//         }

//         localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//         setWishlist(updatedWishlist);
//         router.replace("/wishlist"); // Removes query parameters from the URL
//       } else {
//         setWishlist(updatedWishlist);
//       }
//     }
//   }, [searchParam, router]);

//   const handleRemoveItem = (index: number) => {
//     const updatedWishlist = [...wishlist];
//     updatedWishlist.splice(index, 1);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     setWishlist(updatedWishlist);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Header />
//       <h1 className="text-2xl font-bold mb-6 mt-8">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-gray-600 text-center">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist.map((item, index) => (
//             <Card key={index} className="shadow-md">
//               <CardHeader>
//                 <img src={item.image} alt={item.name} className="w-full h-65 rounded-t" />
//               </CardHeader>
//               <CardContent className="p-4 flex flex-col items-start">
//                 <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
//                 <p className="text-gray-900 mt-1">${item.price}</p>
//                 <Button
//                   variant="destructive"
//                   className="mt-4 flex items-center"
//                   onClick={() => handleRemoveItem(index)}
//                 >
//                   <Trash className="mr-2 h-4 w-4" />
//                   Remove
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }



