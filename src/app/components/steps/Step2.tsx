"use client";

import { OnBack, OnNext } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";
import PersonalInformationForm from "../PersonalInformationForm";

export default function Step2({
  onBack,
  onNext,
}: {
  onNext: OnNext;
  onBack: OnBack;
}) {
  return (
    <div className="grid grid-cols-1 gap-[2rem]">
      <h1 className="text-lg text-center">Personal Information</h1>
      <PersonalInformationForm onNext={onNext} />
      <Button onClick={onBack} className="w-[100px] bg-blue-500">
        Back
      </Button>
    </div>
  );
}
