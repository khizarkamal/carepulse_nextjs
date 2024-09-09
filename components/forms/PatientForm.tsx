"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(setIsLoading);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      console.log("Values---", values);
      setIsLoading(false);
      // const { name, phone, email } = values;
    } catch (error) {
      console.log("Error---", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        <section className=" space-y-4 mb-12">
          <h1 className="header">Hi There</h1>
          <p className="text-dark-700 "> Schedule your first appointment</p>
        </section>

        <CustomFormField
          control={form.control}
          name="name"
          fieldType={FormFieldType.INPUT}
          placeHolder="john doe"
          label="Full Name"
          iconSrc="assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          control={form.control}
          name="email"
          fieldType={FormFieldType.INPUT}
          placeHolder="johndoe@gmail.com"
          label="Email"
          iconSrc="assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          control={form.control}
          name="phone"
          fieldType={FormFieldType.PHONE_INPUT}
          placeHolder="(555-2222-222)"
          label="Phone"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};
export default PatientForm;
