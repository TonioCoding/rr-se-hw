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
  //FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import {
  contactInformationFormSchema,
  useContactInformationForm,
} from "../hooks/customFormHook";
import useFormStore from "../zustand";
import { Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  onNext: () => void;
}

const typesOfBuildings = [
  "Apartment",
  "House",
  "Building",
  "Floor",
  "Unit",
  "Floor",
  "Other",
];

const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export default function ContactInformationForm(props: Props) {
  const { control, register, handleSubmit, errors } =
    useContactInformationForm();
  const form = useContactInformationForm();
  const setFormData = useFormStore((state) => state.setContactInformation);
  const data = useFormStore((state) => state.getState);
  console.log(data());
  type FormSchemaType = z.infer<typeof contactInformationFormSchema>;

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    toast.success("Contact Information Updated");
    setFormData(data);
    props.onNext();
  };

  useEffect(() => {
    if (errors.emailAddress) toast.error(errors.emailAddress.message);
    if (errors.phoneNumber) toast.error(errors.phoneNumber.message);
    if (errors.streetAddress) toast.error(errors.streetAddress.message);
    if (errors.typeOfBuilding) toast.error(errors.typeOfBuilding.message);
    if (errors.city) toast.error(errors.city.message);
    if (errors.state) toast.error(errors.state.message);
    if (errors.postalCode) toast.error(errors.postalCode.message);
  }, [errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-[2rem] w-[400px] place-self-center"
      >
        <FormField
          name="emailAddress"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...register("emailAddress")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="phoneNumber"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...register("phoneNumber")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="streetAddress"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input {...register("streetAddress")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="typeOfBuilding"
          control={control}
          render={() => (
            <FormItem>
              <Controller
                control={control}
                name="typeOfBuilding"
                render={() => (
                  <select
                    className="hover:cursor-pointer underline underline-offset-4"
                    title="types of buildings"
                    {...register("typeOfBuilding")}
                  >
                    <option value="">Building Type</option>
                    {typesOfBuildings.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                )}
              />
            </FormItem>
          )}
        />
        <FormField
          name="state"
          control={control}
          render={() => (
            <FormItem>
              <Controller
                control={control}
                name="state"
                render={() => (
                  <select
                    className="hover:cursor-pointer underline underline-offset-4"
                    title="states"
                    {...register("state")}
                  >
                    <option value="">Select a State</option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </FormItem>
          )}
        />
        <FormField
          name="city"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...register("city")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="postalCode"
          control={control}
          render={() => (
            <FormItem>
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input {...register("postalCode")} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-[100px] bg-green-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}
