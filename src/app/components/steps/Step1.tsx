export default function Step1({ formData, onNext }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const accountType = e.target.accountType.value;
      onNext({ accountType });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Account Type:
          <select name="accountType" defaultValue={formData.accountType || ''}>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </label>
        <button type="submit">Next</button>
      </form>
    );
  }
  