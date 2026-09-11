import { cardsInfo } from "@/constants";
import Image from "next/image";

const CardsInfo = () => {
  return (
    <div className="flex items-center gap-2 mt-4">
      {cardsInfo.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.alt}
          width={50}
          height={25}
          className="rounded-md"
        />
      ))}
    </div>
  );
};

export default CardsInfo;
