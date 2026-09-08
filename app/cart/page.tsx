"use client";

import { cartItems, steps } from "@/constants";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CartPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {steps.map((step, index) => {
          return (
            <div
              className={`flex items-center gap-2 border-b-2 pb-4 ${currentStep === index ? "border-gray-800" : "border-gray-400"}`}
              key={index}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-white ${currentStep === index ? "bg-gray-800" : "bg-gray-400"}`}
              >
                {index + 1}
              </div>
              <p
                className={`text-sm font-medium ${currentStep === index ? "text-gray-800" : "text-gray-400"}`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {currentStep === 0 &&
            cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex gap-8">
                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={item.images[item.selectedColor]}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">Quantity: {" "} {item.quantity}</p>
                        <p className="text-xs text-gray-500">Size: {" "} {item.selectedSize.toUpperCase()}</p>
                        <p className="text-xs text-gray-500">Color: {" "} {item.selectedColor}</p>
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
        </div>
        <div className="w-full h-max lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Total Without Discount</p>
              <p className="font-medium">
                {cartItems
                  .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount(%10)</p>
              <p className="font-medium">10%</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Free</p>
              <p className="font-medium">0</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                {cartItems
                  .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {currentStep === 0 && (
            <button
              type="button"
              className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
              onClick={() => {
                if (currentStep >= 2) return;
                setCurrentStep((prev) => prev + 1);
              }}
            >
              <span>Continue</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
