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
} from "../ui/Form";
import { Input } from "../ui/Input";
import { usePersonalInformationForm } from "../hooks/customFormHook";

export default function PersonalInformationForm() {
  const { register, handleSubmit, errors, onSubmit } =
    usePersonalInformationForm();

  const form = usePersonalInformationForm();
  console.log(errors);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-[1rem] w-[400px] place-self-center"
      >
        <FormField
          name="firstName"
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
          name="lastName"
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
          name="middleName"
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
          name="dateOfBirth"
          render={() => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input {...register("dateOfBirth")} />
              </FormControl>
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
