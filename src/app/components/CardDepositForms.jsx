import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, ChevronRight } from "lucide-react";

export default function CardDepositForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-black text-white"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 rounded-lg text-lg font-bold flex items-center">
        <CreditCard className="mr-2" />
        CARD DEPOSIT
        <ChevronRight className="ml-2" />
      </Button>

      <div className="w-full max-w-md bg-gray-100 text-black rounded-lg shadow-lg mt-8 md:mt-0 md:ml-6 p-6">
        <Card className="bg-gray-100">
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardName" className="font-bold text-lg">Card Holder Name</Label>
              <Input
                id="cardName"
                placeholder="Enter your bank name"
                className="bg-gray-500 text-white placeholder-white shadow-md"
              />
            </div>

            <div>
              <Label htmlFor="cardNumber" className="font-bold text-lg">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="Enter your account number"
                className="bg-gray-500 text-white placeholder-white shadow-md"
              />
            </div>

            <div>
              <Label htmlFor="cvv" className="font-bold text-lg">CVV</Label>
              <Input
                id="cvv"
                placeholder="Enter amount to withdraw"
                className="bg-gray-500 text-white placeholder-white shadow-md"
              />
            </div>

            <div>
              <Label htmlFor="twofa" className="font-bold text-lg">Enter 2FA Code</Label>
              <Input
                id="twofa"
                placeholder="Enter your 2FA Code"
                className="bg-gray-500 text-white placeholder-white shadow-md"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
