"use client";

import Button from "@/components/Button";
import CardsInfo from "@/components/CardsInfo";
import Form from "@/components/Form";
import { steps } from "@/constants";
import useShoppingCart from "@/store/shoppingCart";
import {
  paymentMethodInputsFormSchema,
  shippingAddressInputsFormSchema,
  TPaymentMethodInputsForm,
  TshippingAddressInputsForm,
} from "@/types";
import { ArrowRight, Inbox, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const CartPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { cart, removeFromCart } = useShoppingCart((state) => state);
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
            cart.length > 0 &&
            cart.map((item) => {
              return (
                <div
                  key={item.id + item.selectedColor + item.selectedSize}
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
                        <p className="text-xs text-gray-500">
                          Quantity: {item.selectedQuantity}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {item.selectedSize.toUpperCase()}
                        </p>
                        <p className="text-xs text-gray-500">
                          Color: {item.selectedColor[0].toUpperCase() + item.selectedColor.slice(1)}
                        </p>
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      removeFromCart(item);
                      toast.success("Product deleted successfully")
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          {currentStep === 0 && cart.length === 0 && (
            <div className="flex flex-col h-full items-center justify-center gap-2">
              <Inbox className="w-10 h-10 text-gray-600" />
              <span className="text-sm text-gray-500">No Product</span>
            </div>
          )}
          {currentStep === 1 && (
            <Form<TshippingAddressInputsForm>
              validationSchema={shippingAddressInputsFormSchema}
            >
              {({ register, handleSubmit, formState }) => {
                const shippingAddressSubmit: SubmitHandler<
                  TshippingAddressInputsForm
                > = (values) => {
                  console.log(values);

                  if (currentStep >= 2) return;
                  setCurrentStep((prev) => prev + 1);
                };
                return (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(shippingAddressSubmit)}
                  >
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("name")}
                      />
                      {formState.errors.name && (
                        <p className="text-xs text-red-500">
                          {formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("email")}
                      />
                      {formState.errors.email && (
                        <p className="text-xs text-red-500">
                          {formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="phone"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="09120349867"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("phone")}
                      />
                      {formState.errors.phone && (
                        <p className="text-xs text-red-500">
                          {formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="address"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Red Ruck Main Street"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("address")}
                      />
                      {formState.errors.address && (
                        <p className="text-xs text-red-500">
                          {formState.errors.address.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="city"
                        className="text-xs text-gray-500 font-medium"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        placeholder="New York"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("city")}
                      />
                      {formState.errors.city && (
                        <p className="text-xs text-red-500">
                          {formState.errors.city.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </form>
                );
              }}
            </Form>
          )}
          {currentStep === 2 && (
            <Form<TPaymentMethodInputsForm>
              validationSchema={paymentMethodInputsFormSchema}
            >
              {({ register, handleSubmit, formState }) => {
                const paymentMethodSubmit: SubmitHandler<
                  TPaymentMethodInputsForm
                > = (values) => {
                  console.log(values);
                };
                return (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(paymentMethodSubmit)}
                  >
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="cardHolder"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="cardHolder"
                        placeholder="John Doe"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("cardHolder")}
                      />
                      {formState.errors.cardHolder && (
                        <p className="text-xs text-red-500">
                          {formState.errors.cardHolder.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="cardNumber"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="6045905434569876"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("cardNumber")}
                      />
                      {formState.errors.cardNumber && (
                        <p className="text-xs text-red-500">
                          {formState.errors.cardNumber.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="expireDate"
                        className="text-xs text-gray-500 font-medium"
                      >
                        Expire Date
                      </label>
                      <input
                        type="text"
                        id="expireDate"
                        placeholder="01/08"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("expireDate")}
                      />
                      {formState.errors.expireDate && (
                        <p className="text-xs text-red-500">
                          {formState.errors.expireDate.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="CVV"
                        className="text-xs text-gray-500 font-medium"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="CVV"
                        placeholder="9787"
                        className="border-b border-gray-200 text-sm outline-0"
                        autoComplete="off"
                        {...register("cvv")}
                      />
                      {formState.errors.cvv && (
                        <p className="text-xs text-red-500">
                          {formState.errors.cvv.message}
                        </p>
                      )}
                    </div>
                    <CardsInfo/>
                    <Button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Checkout</span>
                      <ShoppingCart className="w-3 h-3" />
                    </Button>
                  </form>
                );
              }}
            </Form>
          )}
        </div>
        <div className="w-full h-max lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Total Without Discount</p>
              <p className="font-medium">
                $
                {cart
                  .reduce((acc, item) => (acc += item.price * item.selectedQuantity), 0)
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
                $
                {cart
                  .reduce((acc, item) => (acc += item.price * item.selectedQuantity), 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {currentStep === 0 && (
            <Button
              type="button"
              className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
              onClick={() => {
                setCurrentStep(1);
              }}
            >
              <span>Continue</span>
              <ArrowRight className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
