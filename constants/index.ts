import { ICardInfo, IProduct } from "@/types";

// ADDRESS LOCAL IMAGE

export const LOGO = "/logo.png";
export const FEATURED = "/featured.png";
export const KLARNA = "/klarna.png";
export const MASTER = "/master.png";
export const STRIPE = "/stripe.png";

// ADDRESS PAGES

export const HOME = "/";
export const SIGNIN = "/login";
export const PRODUCTS = "/products";
export const CART = "/cart";

// PRODUCTS SAMPLE

export const products: IProduct[] = [
  {
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
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: [
      { color: "gray", imageUrl: "/products/2g.png" },
      { color: "green", imageUrl: "/products/2gr.png" },
    ],
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: [
      { color: "green", imageUrl: "/products/3gr.png" },
      { color: "blue", imageUrl: "/products/3b.png" },
      { color: "black", imageUrl: "/products/3bl.png" },
    ],
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: [
      { color: "white", imageUrl: "/products/4w.png" },
      { color: "pink", imageUrl: "/products/4p.png" },
    ],
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: [
      { color: "red", imageUrl: "/products/5r.png" },
      { color: "orange", imageUrl: "/products/5o.png" },
      { color: "black", imageUrl: "/products/5bl.png" },
    ],
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: [
      { color: "gray", imageUrl: "/products/6g.png" },
      { color: "white", imageUrl: "/products/6w.png" },
    ],
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse ",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: [
      { color: "gray", imageUrl: "/products/7g.png" },
      { color: "pink", imageUrl: "/products/7p.png" },
    ],
  },
  {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: [
      { color: "blue", imageUrl: "/products/8b.png" },
      { color: "green", imageUrl: "/products/8gr.png" },
    ],
  },
];

//STEPS

export const steps: string[] = [
  "Shopping Cart",
  "Shipping Address",
  "Peyment Method",
];

//CARD INFO

export const cardsInfo: ICardInfo[] = [
  { src: KLARNA, alt: "klarna" },
  { src: MASTER, alt: "master" },
  { src: STRIPE, alt: "stripe" },
];
