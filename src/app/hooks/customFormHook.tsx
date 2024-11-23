"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

/* const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
}); */

const personalInformationFormSchema = z.object({
  firstName: z.string().min(8, {
    message: "",
  }),
  lastName: z.string().min(8, {
    message: "",
  }),
  middleName: z.string().min(8, {
    message: "",
  }),
  dateOfBirth: z.string().min(8, {
    message: "",
  }),
  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size must not exceed 5MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only JPEG or PNG files are allowed",
    }),
});

const contactInformationFormSchema = z.object({
  emailAddress: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  streetAddress: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  unit: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  postalCode: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function usePersonalInformationForm() {
  const {
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

  const onSubmit: SubmitHandler<typeof personalInformationFormSchema> = (
    data
  ) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}

export function useContactInformationForm() {
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
      unit: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  const onSubmit: SubmitHandler<typeof contactInformationFormSchema> = (
    data
  ) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
