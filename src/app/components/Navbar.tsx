export default function Navbar() {
  return (
    <nav className="flex justify-around">
      <h1>KYC Form</h1>
      <ul className="flex items-center gap-[1rem]">
        <li>How will you use</li>
        <li>Phone Number</li>
        <li>Verify Number</li>
        <li>Personal Information</li>
        <li>Summary</li>
      </ul>
    </nav>
  );
}
