import { yupResolver } from "@hookform/resolvers/yup";
import {
  FieldValues,
  FormState,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import * as Yup from "yup";

const Form = <T extends FieldValues>({
  validationSchema,
  children,
}: {
  validationSchema: Yup.AnyObjectSchema;
  children: ({
    formState,
    register,
    handleSubmit,
  }: {
    formState: FormState<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;
  }) => React.ReactNode;
}) => {
  const { register, handleSubmit, formState } = useForm<T>({
    resolver: yupResolver(validationSchema),
  });
  return children({ register, handleSubmit, formState });
};

export default Form;
