import Categories from "@/components/Categories";
import ProductsList from "@/components/ProductsList";
import { FEATURED } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-3/1 mb-12">
        <Image src={FEATURED} alt="featured product" fill loading="eager"/>
      </div>
      <Categories/>
      <ProductsList isHomePage={true}/>
    </div>
  );
}
