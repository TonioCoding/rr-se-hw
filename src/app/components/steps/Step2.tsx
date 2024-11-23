"use client";

import { OnBack, OnNext } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";
import PersonalInformationForm from "../PersonalInformationForm";

export default function Step4({ onBack }: { onNext: OnNext; onBack: OnBack }) {
  return (
    <div>
      <h1></h1>
      <PersonalInformationForm />
      <Button onClick={onBack} className="w-[100px] bg-blue-500">
        Back
      </Button>
      {/* <Button onClick={onNext} className="w-[100px] bg-blue-500">
        Next
      </Button> */}
    </div>
  );
}
