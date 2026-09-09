"use client";

import { CART } from "@/constants";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href={CART} className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
