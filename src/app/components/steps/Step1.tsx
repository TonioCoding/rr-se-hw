"use client";

import { FormDataObj, OnNext } from "@/app/steps/[step]/page";
import { RxAvatar } from "react-icons/rx";
import { IoBusiness } from "react-icons/io5";
import AccountTypeCard from "../AccountTypeCard";
import { Button } from "@/app/ui/Button";
import { useState } from "react";

export default function Step1({
  formData,
  onNext,
}: {
  formData: FormDataObj;
  onNext: OnNext;
}) {
  const [accountType, setAccountType] = useState("");
  const handleAccountType = (type): void => {
    setAccountType(type);
  };

  const handleSubmit = (e) => {
    if (e.target !== null) {
      e.preventDefault();
      const accountType = e.target.accountType.value;
      onNext({ accountType });
    }
  };

  return (
    <div className="">
      {/* <form onSubmit={handleSubmit} className="">
        <label>
          Account Type:
          <select name="accountType" defaultValue={formData.accountType || ""}>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </label>
        <button type="submit">Next</button>
      </form> */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[1rem]">
        <AccountTypeCard
          title="Personal"
          text="Select account for personal use"
          icon={<RxAvatar />}
          handleAccountType={handleAccountType}
        />
        <AccountTypeCard
          title="Business"
          text="Select account for business use"
          icon={<IoBusiness />}
          handleAccountType={handleAccountType}
        />
      </div>
      <div className="place-self-center text-center my-[1rem] max-w-[400px]">
        <p>
          Choose the account type that best suits your needs. You can select
          Personal for managing individual finances, or Business for handling
          company-related transactions and expenses.
        </p>
        <Button className="mt-[1rem] w-[100px] bg-blue-500 rounded-xl">
          Next
        </Button>
      </div>
    </div>
  );
}
