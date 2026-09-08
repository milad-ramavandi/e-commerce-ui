import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormState,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import * as Yup from "yup";

const Form = <T extends Yup.AnyObject>({
  validationSchema,
  renderProps,
}: {
  validationSchema: Yup.AnyObjectSchema;
  renderProps: ({
    formState,
    register,
    handleSubmit,
  }: {
    formState: FormState<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T, T>;
  }) => React.ReactNode;
}) => {
  const { register, handleSubmit, formState } = useForm<T>({
    resolver: yupResolver(validationSchema),
  });
  return renderProps({ register, handleSubmit, formState });
};

export default Form;
