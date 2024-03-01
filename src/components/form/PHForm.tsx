// import React from 'react';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TPHForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;


const PHForm = ({ onSubmit, children, defaultValues }: TPHForm) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
