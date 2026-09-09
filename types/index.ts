import { ButtonHTMLAttributes } from "react";
import * as Yup from "yup";

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

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?:string;
  children:React.ReactNode;
}


export const shippingAddressInputsFormSchema = Yup.object({}).shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string().email("Email is invalid").required("Email is required."),
  phone: Yup.string().matches(/^\d+$/, "Phone number must contain only numbers!").required("Phone is required."),
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
});

export type TshippingAddressInputsForm = Yup.InferType<typeof shippingAddressInputsFormSchema>;

export const paymentMethodInputsFormSchema = Yup.object({}).shape({
  cardHolder: Yup.string().required("Card holder is required."),
  cardNumber: Yup.string().matches(/^\d+$/, "Card number must contain only numbers!").required("Card number is required."),
  expireDate: Yup.string().matches( /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!").required("Expire date is required."),
  cvv: Yup.string().min(4, "CVV must be 4 digits.").required("CVV is required."),
});

export type TPaymentMethodInputsForm = Yup.InferType<typeof paymentMethodInputsFormSchema>
