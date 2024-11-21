export default function Step2({ formData, onNext, onBack }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const phoneNumber = e.target.phoneNumber.value;
      onNext({ phoneNumber });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            defaultValue={formData.phoneNumber || ''}
          />
        </label>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </form>
    );
  }
  