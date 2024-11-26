import { OnNext, OnBack } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";
import useFormStore from "@/app/zustand";
import PersonalInformationSummary from "../PersonalInformationSummary";
import ContactInformationSummary from "../ContactInformationSummary";
import AccountTypeSummary from "../AccountTypeSummary";

export default function Step4({
  onNext,
  onBack,
}: {
  onNext: OnNext;
  onBack: OnBack;
}) {
  const getFormData = useFormStore((state) => state.getState);
  console.log(getFormData().accountType);
  console.log(getFormData().personalInformation);
  console.log(getFormData().contactInformation);

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
      <div className="flex justify-center gap-4 mt-[1rem]">
        <Button onClick={onBack} className="w-[100px] bg-blue-500">
          Back
        </Button>
        <Button onClick={onNext} className="w-[100px] bg-green-500">
          Complete
        </Button>
      </div>
    </div>
  );
}
