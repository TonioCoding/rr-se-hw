"use client";

import { useParams, useRouter } from "next/navigation";
import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import Step4 from "../../components/steps/Step4";
import { StepsList } from "@/app/components/StepsList";
import { Button } from "@/app/ui/Button";
import { toast } from "react-toastify";
import useFormStore from "@/app/zustand";

/* Dynamic Steps Layout functionality */

/*--Documentation--*/
/*
  ~Displaying current step component~

  The current step displayed will be based on the current step 
  index retrieved using the step from params, which is calculated by interating
  through "steps" and determining which step object has the corresponding 
  string as the given step param, and then using that step's object index
  as the current step component to be displayed.

  i.e.
  currentStepIndex = steps.findIndex((s) => s.id === step) || 0;
  -"steps" is an array containing all possible steps as objects to
  control what step is currently displayed;


  i.e.
  -StepComponent

  

-------------------------------------------------------------------------------------
  ~Navigating between steps~

  To navigate between steps, the current step index is used to 
  calculate what index is next in case of navigating back one step, 
  or navigating forward one step. 

  i.e. 
  -handleNext()
  -handleBack()
  


-------------------------------------------------------------------------------------
  ~Displaying current step title~

  The current step from params is also used to determine the header
  text for the steps layout by converting the step params string to its
  corresponding readable text.

  i.e. "/steps/account-type"
  Conversion: account-type ---> Account Type

  i.e. 
  -pathnameToString()



-------------------------------------------------------------------------------------
  ~Reseting global state~ 

  Using Zustand for global state management, its method "resetState" is
  referenced to allow users to reset the current state when they decide
  to cancel the form process.

  i.e.
  -resetState()
*/

// Type of function used to navigate to the next step
export type OnNext = () => void;

// Type of function used to navigate to the previous step
export type OnBack = () => void;

// Array to represent each step
const steps = [
  { id: "account-type", label: "Account Type", component: Step1 },
  { id: "personal-info", label: "Personal Information", component: Step2 },
  { id: "contact-info", label: "Contact Information", component: Step3 },
  { id: "summary", label: "Summary", component: Step4 },
];

export default function KYC() {
  // reference to global state method for resetting state
  const resetState = useFormStore((state) => state.resetState);

  // Next router hook to navigate between pages
  const router = useRouter();

  // Next params hook to retrieve current step as a param from URL
  const params = useParams<{ step: string }>();

  // Destructuring step URL string from params hook reference
  const { step } = params;

  // Calculate the current step index from corresponding step object from "steps" array
  const currentStepIndex = steps.findIndex((s) => s.id === step) || 0;

  // Calculate the current step component using the current step index
  const StepComponent = steps[currentStepIndex]?.component;

  // Function to navigate to the next step
  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      router.push(`/steps/${steps[currentStepIndex + 1].id}`);
    }
  };

  // Function to navigate to the previous step
  const handleBack = () => {
    if (currentStepIndex > 0) {
      router.push(`/steps/${steps[currentStepIndex - 1].id}`);
    }
  };

  // Function to convert the current step from params to it's readable counterpart
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

  // Function to cancel the form progress and reset the global state to its initial state
  const cancelForm = () => {
    resetState();
    toast.warning("Form canceled");
    router.push("/");
  };

  return (
    <section className="grid grid-cols-1">
      <div className="text-center place-items-center my-[1rem] mb-[3rem]">
        <h1 className="py-[1rem] text-xl">
          <span className="text-blue-500">{pathnameToString(step)}</span>
        </h1>
        <StepsList currentStep={step} />
      </div>
      {StepComponent && (
        <StepComponent onNext={handleNext} onBack={handleBack} />
      )}
      <Button
        className="bg-red-500 w-[100px] self-start mt-[1rem] place-self-center"
        onClick={cancelForm}
      >
        Cancel
      </Button>
    </section>
  );
}
