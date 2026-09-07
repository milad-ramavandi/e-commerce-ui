import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import { HOME, LOGO, SIGNIN } from "@/constants";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href={HOME} className="flex items-center">
        <Image
          src={LOGO}
          width={36}
          height={36}
          alt="logo"
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block font-medium text-md tracking-wider">
          SHOPPER
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href={HOME}><Home className="w-4 h-4 text-gray-600"/></Link>
        <Bell className="w-4 h-4 text-gray-600"/>
        <ShoppingCartIcon/>
        <Link href={SIGNIN}>Sign in</Link>
      </div>
    </header>
  );
};

export default Header;
