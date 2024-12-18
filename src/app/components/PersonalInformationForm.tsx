"use client";

import { Button } from "../ui/Button";
import {
  Form,
  FormControl,
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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

interface Props {
  onNext: () => void;
}

type SelectedDate = null | string;

export default function PersonalInformationForm(props: Props) {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(null);
  const { control, register, handleSubmit, errors } =
    usePersonalInformationForm();
  const form = usePersonalInformationForm();
  const setFormData = useFormStore((state) => state.setPersonalInformation);

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

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-[1.5rem] w-full md:w-[400px] place-self-center"
      >
        <FormField
          name="firstName"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...register("firstName")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="middleName"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input {...register("middleName")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="lastName"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...register("lastName")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="dateOfBirth"
          control={control}
          render={({ field: { onChange } }) => (
            <FormItem className="flex gap-5 items-center">
              <FormLabel>Date of birth</FormLabel>
              <Controller
                control={control}
                name="dateOfBirth"
                render={() => (
                  <ReactDatePicker
                    maxDate={new Date("2024/12/31")}
                    minDate={new Date("1900/01/01")}
                    selected={selectedDate ? new Date(selectedDate) : null}
                    onChange={(date) => {
                      const newDate = moment(date).format("l");
                      onChange(newDate);
                      setSelectedDate(newDate);
                    }}
                    showYearDropdown
                    dateFormat="MM-dd-yyyy"
                    placeholderText="Select date"
                    className="input"
                  />
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="place-self-center md:place-self-start w-[100px] bg-green-500 mt-[1rem]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
