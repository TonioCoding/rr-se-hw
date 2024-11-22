import { OnBack, OnNext } from "@/app/steps/[step]/page";
import { Button } from "@/app/ui/Button";

export default function Step3({
  onNext,
  onBack,
}: {
  onNext: OnNext;
  onBack: OnBack;
}) {
  return (
    <div>
      hey
      <Button onClick={onBack} className="w-[100px] bg-blue-500">
        Back
      </Button>
      <Button onClick={onNext} className="w-[100px] bg-blue-500">
        Next
      </Button>
    </div>
  );
}
