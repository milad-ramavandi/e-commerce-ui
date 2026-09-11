"use client";

import { IProductInteractionProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useShoppingCart from "@/store/shoppingCart";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
  selectedQuantity,
}: IProductInteractionProps) => {
  const addToCart = useShoppingCart((state) => state.addToCart);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productInteractionHandler = (
    type: "color" | "size" | "quantity",
    value: string | number,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => {
            return (
              <div
                className={`cursor-pointer border p-0.5 ${selectedSize === size ? "border-gray-800" : "border-gray-400"}`}
                key={size}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                  onClick={() => productInteractionHandler("size", size)}
                >
                  {size.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => {
            return (
              <div
                className={`cursor-pointer border p-0.5 ${selectedColor === color ? "border-gray-800" : "border-white"}`}
                key={color}
              >
                <div
                  className={`w-6 h-6`}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => productInteractionHandler("color", color)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <Button
            className={`cursor-pointer p-1 border border-gray-300 ${Number(selectedQuantity) === 1 && "opacity-50 pointer-events-none"}`}
            onClick={() => {
              if (Number(selectedQuantity) > 1) {
                productInteractionHandler(
                  "quantity",
                  Number(selectedQuantity) - 1,
                );
              }
            }}
          >
            <Minus
              className={`w-4 h-4 ${Number(selectedQuantity) === 1 && "opacity-50"}`}
            />
          </Button>
          <span>{selectedQuantity}</span>
          <Button
            className="cursor-pointer p-1 border border-gray-300"
            onClick={() =>
              productInteractionHandler(
                "quantity",
                Number(selectedQuantity) + 1,
              )
            }
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
        onClick={() => {
          addToCart({
            ...product,
            selectedColor,
            selectedQuantity: Number(selectedQuantity),
            selectedSize,
          });
          toast.success("Product added to cart");
        }}
      >
        <Plus className="w-4 h-4" />
        <span>Add to Cart</span>
      </Button>
      <Button
        type="button"
        className="ring ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Buy this Product</span>
      </Button>
    </div>
  );
};

export default ProductInteraction;
