import { OnBack, OnNext } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";
import ContactInformationForm from "../ContactInformationForm";

export default function Step3({
  onNext,
  onBack,
}: {
  onNext: OnNext;
  onBack: OnBack;
}) {
  return (
    <div className="grid grid-cols-1 gap-[2rem]">
      <h1 className="text-lg text-center">Contact Information</h1>
      <ContactInformationForm onNext={onNext} />
      <Button onClick={onBack} className="w-[100px] bg-blue-500 place-self-center mt-[1rem]">
        Back
      </Button>
    </div>
  );
}
