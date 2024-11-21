export default function Step4({ formData, onNext, onBack }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const personalInfo = {
        name: e.target.name.value,
        address: e.target.address.value,
        dob: e.target.dob.value,
      };
      onNext({ personalInfo });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" defaultValue={formData.personalInfo.name || ''} />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            defaultValue={formData.personalInfo.address || ''}
          />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" defaultValue={formData.personalInfo.dob || ''} />
        </label>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </form>
    );
  }
  