import React from "react";
import { useRegisterSchema } from "./hooks/useRegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputNames } from "./interfaces/FormInputNames";
import { RegisterPageView } from "./view";

export const RegisterPage = () => {
  // TODO: Create a eslint configuration. Look this link: https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/
  const { schema } = useRegisterSchema();
  const {
    control,
    handleSubmit,
    formState: { errors },
    // @ts-expect-error
  } = useForm<IFormInputNames>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInputNames) => {
    // TODO: Check password and passwordConfirmation match before anithing 
    // TODO: Implement function
  };

  return <RegisterPageView onSubmit={handleSubmit(onSubmit)} control={control} />;
};