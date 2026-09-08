export interface IProduct {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export interface IControlSizeAndColor {
  size:string;
  color:string
}

export interface ICart extends IProduct {
  quantity:number;
  selectedColor:string;
  selectedSize:string
}
