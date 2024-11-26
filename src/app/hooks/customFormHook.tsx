"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

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
  /* .refine((date) => {
      //here use regex to make sure date is of desired format
      //i.e. yyyy-mm-dd
    }) */
  /*  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must not exceed 5MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPEG or PNG files are allowed",
    }), */
});

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
  typeOfBuilding: z.string().min(2, {
    message: "Building type must be at least 2 characters.",
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

export function usePersonalInformationForm() {
  const form = useForm<z.infer<typeof personalInformationFormSchema>>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
    },
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof personalInformationFormSchema>>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
    },
  });

  type FormSchemaType = z.infer<typeof personalInformationFormSchema>;

  // onSubmit is opt: form goal is to update zustand state, which can't be done outside a react component
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
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

export function useContactInformationForm() {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactInformationFormSchema>>({
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

  type FormSchemaType = z.infer<typeof contactInformationFormSchema>;

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
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
