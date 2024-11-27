"use client";

import { OnBack } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";
import useFormStore from "@/app/zustand";
import PersonalInformationSummary from "../PersonalInformationSummary";
import ContactInformationSummary from "../ContactInformationSummary";
import AccountTypeSummary from "../AccountTypeSummary";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Step4({ onBack }: { onBack: OnBack }) {
  const resetState = useFormStore((state) => state.resetState);

  const router = useRouter();

  const submitForm = () => {
    resetState();
    toast.success("Form submitted!");
    router.push("/");
  };

  return (
    <div>
      <h1 className="font-semibold text-xl mb-[2rem] text-center md:text-start">
        Summary
      </h1>
      <div className="grid md:grid-cols-3 gap-[1rem]">
        <AccountTypeSummary />
        <PersonalInformationSummary />
        <ContactInformationSummary />
      </div>
      <div className="flex justify-between md:justify-center gap-4 my-[1rem]">
        <Button
          onClick={onBack}
          className="w-[100px] bg-blue-500 place-self-center"
        >
          Back
        </Button>
        <Button onClick={submitForm} className="w-[100px] bg-green-500">
          Complete
        </Button>
      </div>
    </div>
  );
}
