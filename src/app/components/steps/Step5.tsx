export default function Step5({ formData, onBack }) {
  return (
    <div>
      <h2>Summary</h2>
      <p>Account Type: {formData.accountType}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Name: {formData.personalInfo.name}</p>
      <p>Address: {formData.personalInfo.address}</p>
      <p>Date of Birth: {formData.personalInfo.dob}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
}
