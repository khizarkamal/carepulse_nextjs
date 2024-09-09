"use client";

import React from "react";
import {
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  fieldType: FormFieldType;
  label?: string;
  placeHolder?: string;
  name: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderSkeleton?: (field: any) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, iconAlt, placeHolder } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              className="ml-2"
              width={24}
              height={24}
              src={iconSrc}
              alt={iconAlt || "icon"}
              priority
            />
          )}
          <FormControl>
            <Input
              className="text-dark-600 border-0 shad-input"
              {...field}
              placeholder={placeHolder}
            ></Input>
          </FormControl>
        </div>
      );
      break;
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={placeHolder}
            defaultCountry="US"
            withCountryCallingCode
            value={(field.value as E164Number) || undefined}
            international
            onChange={field.onChange}
            className=" input-phone  w-full text-dark-600"
          ></PhoneInput>
        </FormControl>
      );
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderField field={field} props={props}></RenderField>
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
