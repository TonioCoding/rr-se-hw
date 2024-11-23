"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const personalInformationFormSchema = z.object({
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
  emailAddress: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  phoneNumber: z.number().min(10, {
    message: "Phone number must be at least 10 characters.",
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

export function useContactInformationForm() {
  const form = useForm<z.infer<typeof contactInformationFormSchema>>({
    resolver: zodResolver(contactInformationFormSchema),
    defaultValues: {
      emailAddress: "",
      phoneNumber: 0,
      streetAddress: "",
      unit: "",
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
      phoneNumber: 0,
      streetAddress: "",
      unit: "",
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