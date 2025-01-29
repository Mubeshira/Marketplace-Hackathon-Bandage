


"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface ICart {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface IShipmentData {
  shipment_cost?: { amount: number };
}

export default function CheckoutForm() {
  const [cartItem, setCartItem] = useState<ICart[]>([]);
  const [shipCost, setShipCost] = useState(0);

  useEffect(() => {
    // Fetch cart data
    const data = localStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    setCartItem(cart);
    

    // Fetch shipment data
    const shipmentData = localStorage.getItem("ShipmentData");
    const shipData: IShipmentData = shipmentData ? JSON.parse(shipmentData) : {};
    const cost = shipData?.shipment_cost?.amount ?? 0; 
    setShipCost(parseFloat(cost.toFixed(2)));
  }, []);

  function handlePayment() {
    alert("Payment successful ✅");
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItem([]);
  }

  const subtotal = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // const totalAmount = subtotal + shipCost;
 const totalAmount = Number(cartItem.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0) 

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">How would you like to get your order?</h2>
            <p className="text-sm text-gray-500">
              Customs regulation  require a copy of the recipients KYC. The address on the KYC needs to
              match the shipping address.
            </p>
            <Button variant="outline" className="w-full justify-start gap-4 rounded-xl border-2 py-6">
              <div className="h-6 w-6 rounded-full border-2" />
              Deliver It
            </Button>
          </div>

          {/* Name and Address Form */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Enter your name and address:</h2>
            <div className="grid gap-4">
              <Input className="rounded-md py-6" placeholder="First Name" />
              <Input className="rounded-md py-6" placeholder="Last Name" />
              <Input className="rounded-md py-6" placeholder="Address Line 1" />
              <Input className="rounded-md py-6" placeholder="Address Line 2" />
              <div className="grid grid-cols-2 gap-4">
                <Input className="rounded-md py-6" placeholder="Postal Code" />
                <Input className="rounded-md py-6" placeholder="Locality" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="rounded-md py-6">
                    <SelectValue placeholder="State/Territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectContent>
                </Select>
                <Input className="rounded-md py-6" placeholder="India" disabled />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">What&apos;s your contact information?</h2>
            <Input className="rounded-md py-6" placeholder="Email" type="email" />
            <Input className="rounded-md py-6" placeholder="Phone Number" type="tel" />
          </div>

          {/* Payment */}
          <div className="space-y-4">
            <Button className="w-full rounded-full py-6" onClick={handlePayment}>
              Lets Pay
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <Card className="h-fit p-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>{shipCost > 0 ? `$ ${shipCost.toFixed(2)}` : "Free"}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                {/* <span>₹ {totalAmount.toFixed(2)}</span> */}
                <span>$ {totalAmount}</span>
              </div>
            </div>
            <div className="pt-6 space-y-4">
              {cartItem.map((item, index) => (
                <div className="flex gap-4" key={index}>
                  <Image src={item.image} alt={item.name} width={80} height={80} />
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                    <p className="text-sm text-gray-500">$ {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
