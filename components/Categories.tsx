"use client";

import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <BriefcaseBusiness className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const checkForScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth + 1 < scrollWidth);
  };

  useEffect(() => {
    checkForScrollPosition();
    const handleResize = () => {
      checkForScrollPosition();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (offset: number) => {
    scrollRef?.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const searchParamsHandle = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="relative">
      {canScrollLeft && (
        <Button
          onClick={() => scroll(-150)}
          className="w-12.5 h-full block absolute left-0 top-0 bg-linear-to-l from-transparent to-white z-50"
        >
          <ChevronLeft className="text-amber-400 opacity-80 absolute left-0 -translate-y-1/2" />
        </Button>
      )}
      <div
        ref={scrollRef}
        onScroll={checkForScrollPosition}
        className="flex justify-evenly gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm overflow-x-scroll scrollbar-none"
      >
        {categories.map((category) => (
          <div
            className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md text-nowrap ${selectedCategory === category.slug ? "bg-white" : "text-gray-500"}`}
            key={category.name}
            onClick={() => searchParamsHandle(category.slug)}
          >
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>
      {canScrollRight && (
        <Button
          onClick={() => scroll(150)}
          className="w-12.5 block h-full absolute right-0 top-0 bg-linear-to-r from-transparent to-white z-50"
        >
          <ChevronRight className="text-amber-400 opacity-80 absolute right-0 -translate-y-1/2" />
        </Button>
      )}
    </div>
  );
};

export default Categories;
