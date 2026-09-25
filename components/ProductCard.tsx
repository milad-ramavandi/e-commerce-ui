"use client";

import useShoppingCart from "@/store/shoppingCart";
import { IProduct, IProductInteraction } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { PRODUCTS } from "@/constants";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useShoppingCart((state) => state.addToCart);
  const [productIntraction, setProductIntraction] =
    useState<IProductInteraction>({
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
      selectedQuantity: quantity,
    });
  const productInteractionHandler = (
    type: "selectedColor" | "selectedSize",
    value: string,
  ) => {
    setProductIntraction((prev) => ({ ...prev, [type]: value }));
  };
  const productImage = product.images.find(
    (item) => item.color === productIntraction.selectedColor,
  )?.imageUrl;
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {productImage && (
        <Link href={`${PRODUCTS}/${product.id}`}>
          <div className="relative aspect-2/3">
            <Image
              src={productImage}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium line-clamp-1">{product.name}</h1>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="font-medium">${product.price.toFixed(2)}</p>
        <div className="flex items-center gap-6 text-xs flex-wrap">
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Size</p>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                productInteractionHandler("selectedSize", e.target.value)
              }
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
                  className={`w-5.5 h-5.5 rounded-full border-2 cursor-pointer ${productIntraction.selectedColor === color ? "border-gray-400 scale-125" : "border-gray-200"}`}
                  style={{ backgroundColor: `${color}` }}
                  onClick={() =>
                    productInteractionHandler("selectedColor", color)
                  }
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Quantity</p>
            <div className="flex items-center gap-3.5 border border-gray-300 rounded-lg p-1">
              <Button
                className={`cursor-pointer ${quantity === 1 && "opacity-50 pointer-events-none"}`}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity((prev) => prev - 1);
                  }
                }}
              >
                <Minus
                  className={`w-4 h-4 ${quantity === 1 && "opacity-50"}`}
                />
              </Button>
              <span>{quantity}</span>
              <Button
                className="cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button
            type="button"
            className="flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
            onClick={() => {
              addToCart({
                ...product,
                selectedColor: productIntraction.selectedColor,
                selectedSize: productIntraction.selectedSize,
                selectedQuantity: quantity,
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
