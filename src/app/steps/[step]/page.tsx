"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import Step4 from "../../components/steps/Step4";
import Step5 from "../../components/steps/Step5";

export type Data = { accountType?: string } & { phoneNumber?: string } & {
  otp?: string;
} & { personalInfo?: PersonalInfo };

export type OnNext = (data: Data) => void;

export type OnBack = () => void;

interface PersonalInfo {
  name: string;
  address: string;
  dob: string;
}

export interface FormDataObj {
  accountType: string;
  phoneNumber: string;
  otp: string;
  personalInfo: PersonalInfo;
}

const steps = [
  { id: "account-type", label: "Account Type", component: Step1 },
  { id: "phone-number", label: "Phone Number", component: Step2 },
  { id: "verify-number", label: "Verify Number", component: Step3 },
  { id: "personal-info", label: "Personal Information", component: Step4 },
  { id: "summary", label: "Summary", component: Step5 },
];

export default function KYC() {
  const router = useRouter();
  const params = useParams<{ step: string }>();
  const { step } = params;
  console.log(step);
  const currentStepIndex = steps.findIndex((s) => s.id === step) || 0;

  const [formData, setFormData] = useState({
    accountType: "",
    phoneNumber: "",
    otp: "",
    personalInfo: { name: "", address: "", dob: "" },
  });

  const StepComponent = steps[currentStepIndex]?.component;

  const handleNext = (data: Data) => {
    setFormData({ ...formData, ...data });
    if (currentStepIndex < steps.length - 1) {
      router.push(`/steps/${steps[currentStepIndex + 1].id}`);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      router.push(`/steps/${steps[currentStepIndex - 1].id}`);
    }
  };

  return (
    <div>
      <h1>KYC Form - Step {currentStepIndex + 1}</h1>
      {StepComponent && (
        <StepComponent
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
