"use client";

import { useParams, useRouter } from "next/navigation";
import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import Step4 from "../../components/steps/Step4";
import { StepsList } from "@/app/components/StepsList";

export type OnNext = () => void;

export type OnBack = () => void;

const steps = [
  { id: "account-type", label: "Account Type", component: Step1 },
  { id: "personal-info", label: "Personal Information", component: Step2 },
  { id: "contact-info", label: "Contact Information", component: Step3 },
  { id: "summary", label: "Summary", component: Step4 },
];

export default function KYC() {
  const router = useRouter();
  const params = useParams<{ step: string }>();
  const { step } = params;
  const currentStepIndex = steps.findIndex((s) => s.id === step) || 0;
  const StepComponent = steps[currentStepIndex]?.component;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      router.push(`/steps/${steps[currentStepIndex + 1].id}`);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      router.push(`/steps/${steps[currentStepIndex - 1].id}`);
    }
  };

  const pathnameToString = (pathname: string): string => {
    switch (pathname) {
      case "account-type":
        return "Account Type";
      case "contact-info":
        return "Contact Information";
      case "personal-info":
        return "Personal Information";
      case "summary":
        return "Summary";
      default:
        return "";
    }
  };

  return (
    <section>
      <div className="text-center place-items-center my-[1rem] mb-[3rem]">
        <h1 className="py-[1rem]">
          KYC Form &#8208; Step {currentStepIndex + 1}{" "}
          <span className="text-blue-500">{pathnameToString(step)}</span>
        </h1>
        <StepsList currentStep={step} />
      </div>

      {StepComponent && (
        <StepComponent onNext={handleNext} onBack={handleBack} />
      )}
    </section>
  );
}
