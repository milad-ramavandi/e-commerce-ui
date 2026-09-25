import CardsInfo from "@/components/CardsInfo";
import ProductInteraction from "@/components/ProductInteraction";
import { IProduct, IProductPage } from "@/types";
import Image from "next/image";

const product: IProduct = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: [
    { color: "gray", imageUrl: "/products/1g.png" },
    { color: "purple", imageUrl: "/products/1p.png" },
    { color: "green", imageUrl: "/products/1gr.png" },
  ],
};

const ProductPage = async ({ params, searchParams }: IProductPage) => {
  const { color, size, quantity } = await searchParams;
  const selectedColor = color ? color : product.colors[0];
  const selectedSize = size ? size : product.sizes[0];
  const selectedQuantity = quantity ? quantity : 1;
  const productImage = product.images.find(
    (item) => item.color === selectedColor,
  )?.imageUrl;
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-12 mt-12">
      {productImage && (
        <div className="relative w-full md:w-5/12 aspect-2/3">
          <Image
            src={productImage}
            alt={product.name}
            fill
            className="object-contain rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="w-full md:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedQuantity={selectedQuantity}
        />
        <CardsInfo />
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
