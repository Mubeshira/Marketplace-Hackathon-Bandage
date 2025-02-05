


// 3
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

interface IProduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function Wishlist() {
  const router = useRouter();
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  // Load wishlist data from localStorage and handle search query
  useEffect(() => {
    // Fetch wishlist from localStorage
    const wishlistData = localStorage.getItem("wishlist");
    const updatedWishlist: IProduct[] = wishlistData
      ? JSON.parse(wishlistData)
      : [];

    // Parse URL search parameters
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name");
      const price = params.get("price");
      const description = params.get("description");
      const image = params.get("image");

      // If product details are in the URL, add them to the wishlist
      if (name && price && description && image) {
        const isDuplicate = updatedWishlist.some(
          (item) => item.name === name
        );

        if (!isDuplicate) {
          updatedWishlist.push({
            name,
            price,
            description,
            image,
            quantity: 1,
          });
        }

        // Update localStorage and state
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);

        // Clean up URL query parameters
        router.replace("/wishlist");
      } else {
        // Load wishlist on initial render
        setWishlist(updatedWishlist);
      }
    }
  }, [router]);

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
                  className="w-full h-65 rounded-t"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col items-start">
                <CardTitle className="text-lg font-medium">
                  {item.name}
                </CardTitle>
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
      <Footer />
    </div>
  );
}
