import { FormDataObj, OnBack, OnNext } from "@/app/steps/[step]/page";

export default function Step3({
  formData,
  onNext,
  onBack,
}: {
  formData: FormDataObj;
  onNext: OnNext;
  onBack: OnBack;
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = e.target.otp.value;
    onNext({ otp });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        OTP:
        <input type="text" name="otp" defaultValue={formData.otp || ""} />
      </label>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
