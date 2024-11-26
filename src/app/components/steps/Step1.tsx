"use client";

import { OnNext } from "@/app/steps/[step]/page";
import { RxAvatar } from "react-icons/rx";
import { IoBusiness } from "react-icons/io5";
import AccountTypeCard from "../AccountTypeCard";
import { Button } from "@/app/ui/Button";
import { useEffect, useState } from "react";
import useFormStore from "@/app/zustand";
import { toast } from "react-toastify";

export default function Step1({ onNext }: { onNext: OnNext }) {
  const [accountType, setAccountType] = useState("");

  const updateAccountTypeState = useFormStore((state) => state.setAccountType);
  const getState = useFormStore((state) => state.getState());

  const handleAccountType = (type: string): void => {
    if (type === accountType) {
      setAccountType("");
    } else {
      setAccountType(type);
    }
  };

  const handleSubmit = () => {
    if (accountType !== "") {
      updateAccountTypeState(accountType);
      onNext();
    } else {
      toast.error("Please choose account type");
    }
  };

  useEffect(() => {
    setAccountType(getState.accountType);
  }, [getState]);

  return (
    <div className="">
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
        <p>Choose the account type that best suits your needs&#46;</p>
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
