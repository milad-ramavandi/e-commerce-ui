import { HOME, LOGO } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href={HOME} className="flex items-center">
          <Image src={LOGO} width={36} height={36} alt="logo" />
          <p className="hidden md:block font-medium text-md tracking-wider text-white">
            SHOPPER
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2026 SHOPPER</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={HOME} className="hover:text-gray-300">Home</Link>
        <Link href={HOME} className="hover:text-gray-300">Contact</Link>
        <Link href={HOME} className="hover:text-gray-300">Terms of Service</Link>
        <Link href={HOME} className="hover:text-gray-300">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href={HOME} className="hover:text-gray-300">All Products</Link>
        <Link href={HOME} className="hover:text-gray-300">New Arrivals</Link>
        <Link href={HOME} className="hover:text-gray-300">Best Sellers</Link>
        <Link href={HOME} className="hover:text-gray-300">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href={HOME} className="hover:text-gray-300">About</Link>
        <Link href={HOME} className="hover:text-gray-300">Contact</Link>
        <Link href={HOME} className="hover:text-gray-300">Blog</Link>
        <Link href={HOME} className="hover:text-gray-300">Affilate Program</Link>
      </div>
    </footer>
  );
};

export default Footer;
