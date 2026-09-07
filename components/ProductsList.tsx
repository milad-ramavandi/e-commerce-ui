import { products } from "@/constants";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductsList = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isHomePage && (
        <Link
          href={"/products"}
          className="flex justify-end text-sm underline text-gray-500"
        >
          View all Products
        </Link>
      )}
    </div>
  );
};

export default ProductsList;
