"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useFormStore from "../zustand";

// Created zod object schema to integrate with custom form hook
// This schema is used to validate the state of a custom form hook
export const personalInformationFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  middleName: z.string().min(2, {
    message: "Middle name must be at least 2 characters",
  }),
  dateOfBirth: z.coerce.string().min(1, { message: "Please Select DOB" }),
});

// Created zod object schema to integrate with custom form hook
// This schema is used to validate the state of a custom form hook
export const contactInformationFormSchema = z.object({
  emailAddress: z.string().email().min(8, {
    message: "Email address must be at least 8 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  streetAddress: z.string().min(2, {
    message: "Street address must be at least 2 characters.",
  }),
  typeOfBuilding: z.string().min(1, {
    message: "Building type is mandatory.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  postalCode: z.string().min(5, {
    message: "Postal must be at least 5 digits.",
  }),
});

// Created custom form hook
export function usePersonalInformationForm() {
  // Getting reference to Zustand global state method to retrieve state
  const getState = useFormStore((state) => state.getState);

  // Custom form declaration #1, spread form properties to parent form component
  // i.e. <Form {...form}>...</Form>
  const form = useForm<z.infer<typeof personalInformationFormSchema>>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
    },
  });

  // Custom form declaration #2, destructured variables from custom hook to use in form fields
  // i.e. <FormField control={control}>...</FormField>
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof personalInformationFormSchema>>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: {
      firstName: getState().personalInformation.firstName || "",
      lastName: getState().personalInformation.lastName || "",
      middleName: getState().personalInformation.middleName || "",
      dateOfBirth: getState().personalInformation.dateOfBirth || "",
    },
  });

  type FormSchemaType = z.infer<typeof personalInformationFormSchema>;

  // Function to execute when form is submitted
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    // Do something with data(form state)...

    console.log(data);
    console.log("form data has been submitted");
  };

  return {
    ...form,
    control,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}

// Created custom form hook

export function useContactInformationForm() {
  // Getting reference to Zustand global state method to retrieve state

  const getState = useFormStore((state) => state.getState);

  // Custom form declaration #1, spread form properties to parent form component
  // i.e. <Form {...form}>...</Form>
  const form = useForm<z.infer<typeof contactInformationFormSchema>>({
    resolver: zodResolver(contactInformationFormSchema),
    defaultValues: {
      emailAddress: "",
      phoneNumber: "",
      streetAddress: "",
      typeOfBuilding: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  // Custom form declaration #2, destructured variables from custom hook to use in form fields
  // i.e. <FormField control={control}>...</FormField>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactInformationFormSchema>>({
    resolver: zodResolver(contactInformationFormSchema),
    defaultValues: {
      emailAddress: getState().contactInformation.emailAddress || "",
      phoneNumber: getState().contactInformation.phoneNumber || "",
      streetAddress: getState().contactInformation.streetAddress || "",
      typeOfBuilding: getState().contactInformation.typeOfBuilding || "",
      city: getState().contactInformation.city || "",
      state: getState().contactInformation.state || "",
      postalCode: getState().contactInformation.postalCode || "",
    },
  });

  type FormSchemaType = z.infer<typeof contactInformationFormSchema>;

  // Function to execute when form is submitted
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    // Do something with data(form state)...

    console.log(data);
  };

  return {
    ...form,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
