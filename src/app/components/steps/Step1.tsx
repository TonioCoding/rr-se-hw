import { FormDataObj, OnNext } from "@/app/steps/[step]/page";
import { Card, CardFooter, CardHeader, CardTitle } from "@/app/ui/Card";
// account type
export default function Step1({
  formData,
  onNext,
}: {
  formData: FormDataObj;
  onNext: OnNext;
}) {
  const handleSubmit = (e) => {
    if (e.target !== null) {
      e.preventDefault();
      const accountType = e.target.accountType.value;
      onNext({ accountType });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Account Type:
          <select name="accountType" defaultValue={formData.accountType || ""}>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </label>
        <button type="submit">Next</button>
      </form>
      <Card className="bg-red-500">
        <CardTitle>Hey</CardTitle>
        <CardHeader>hey</CardHeader>
        <CardFooter>bye</CardFooter>
      </Card>
    </>
  );
}
