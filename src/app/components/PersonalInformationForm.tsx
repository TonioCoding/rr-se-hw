"use client";

import { Button } from "../ui/Button";
import {
  //FormMessage,
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import {
  personalInformationFormSchema,
  usePersonalInformationForm,
} from "../hooks/customFormHook";
import useFormStore from "../zustand";
import { Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

interface Props {
  onNext: () => void;
}

export default function PersonalInformationForm(props: Props) {
  const { control, register, handleSubmit, errors } =
    usePersonalInformationForm();
  const form = usePersonalInformationForm();
  const setFormData = useFormStore((state) => state.setPersonalInformation);
  const getState = useFormStore((state) => state.getState);

  type FormSchemaType = z.infer<typeof personalInformationFormSchema>;

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    toast.success("Personal Information Updated");
    setFormData(data);
    props.onNext();
  };

  useEffect(() => {
    if (errors.firstName) toast.error(errors.firstName.message);
    if (errors.lastName) toast.error(errors.lastName.message);
    if (errors.middleName) toast.error(errors.middleName.message);
    if (errors.dateOfBirth) toast.error(errors.dateOfBirth.message);
  }, [errors]);

  console.log(getState().personalInformation);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-[1rem] w-[400px] place-self-center"
      >
        <FormField
          name="firstName"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  {...register("firstName")}
                  //placeholder={getState().personalInformation.firstName}
                  defaultValue={"namename"}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="lastName"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  {...register("lastName")}
                  //placeholder={getState().personalInformation.lastName}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="middleName"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input
                  {...register("middleName")}
                  //placeholder={getState().personalInformation.middleName}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="dateOfBirth"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormItem className="flex gap-5 items-center">
              <FormLabel>Date of birth</FormLabel>
              <Controller
                control={control}
                name="dateOfBirth"
                render={() => (
                  <ReactDatePicker
                    selected={value}
                    onChange={(date) => {
                      onChange(moment(date).format("l"));
                      //setCurrentDate(date);
                    }}
                    showYearDropdown
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select date"
                    className="input"
                  />
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-[100px] bg-blue-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}
