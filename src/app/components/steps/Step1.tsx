"use client";

import { OnNext } from "@/app/steps/[step]/page";
import { RxAvatar } from "react-icons/rx";
import { IoBusiness } from "react-icons/io5";
import AccountTypeCard from "../AccountTypeCard";
import { Button } from "@/app/ui/Button";
import { useState } from "react";
import useFormStore from "@/app/zustand";

export default function Step1({ onNext }: { onNext: OnNext }) {
  const [accountType, setAccountType] = useState("");
  const handleAccountType = (type: string): void => {
    setAccountType(type);
  };
  const updateAccountTypeState = useFormStore((state) => state.setAccountType);

  const handleSubmit = () => {
    if (accountType !== "") {
      updateAccountTypeState(accountType);
      onNext();
    }
  };

  const state1 = useFormStore((state) => state.accountType);

  return (
    <div className="">
      {state1}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[1rem]">
        <AccountTypeCard
          title="Personal"
          text="Select account for personal use"
          icon={<RxAvatar />}
          handleAccountType={handleAccountType}
          currentState={accountType}
        />
        <AccountTypeCard
          title="Business"
          text="Select account for business use"
          icon={<IoBusiness />}
          handleAccountType={handleAccountType}
          currentState={accountType}
        />
      </div>
      <div className="flex flex-col items-center gap-[1rem] place-self-center mt-[2rem] text-center my-[1rem] max-w-[400px]">
        <p>
          Choose the account type that best suits your needs. You can select
          Personal for managing individual finances, or Business for handling
          company-related transactions and expenses.
        </p>
        <Button
          type="button"
          onClick={handleSubmit}
          className="mt-[1rem] w-[100px] bg-blue-500 rounded-xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
