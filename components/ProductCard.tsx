"use client";

import useShoppingCart from "@/store/shoppingCart";
import { IControlSizeAndColor, IProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { PRODUCTS } from "@/constants";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: IProduct }) => {
  const addToCart = useShoppingCart((state) => state.addToCart);
  const [controlSizeAndColor, setControlSizeAndColor] =
    useState<IControlSizeAndColor>({
      size: product.sizes[0],
      color: product.colors[0],
    });
  const SizeAndColorHandler = (type: "color" | "size", value: string) => {
    setControlSizeAndColor((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`${PRODUCTS}/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[controlSizeAndColor.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium line-clamp-1">{product.name}</h1>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Size</p>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) => SizeAndColorHandler("size", e.target.value)}
            >
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Color</p>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`w-5.5 h-5.5 rounded-full border-2 cursor-pointer ${controlSizeAndColor.color === color ? "border-gray-400 scale-125" : "border-gray-200"}`}
                  style={{ backgroundColor: `${color}` }}
                  onClick={() => SizeAndColorHandler("color", color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button
            type="button"
            className="flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
            onClick={() => {
              addToCart({
                ...product,
                selectedColor: controlSizeAndColor.color,
                selectedSize: controlSizeAndColor.size,
                quantity: 1,
              });
              toast.success("Product added to cart.");
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
