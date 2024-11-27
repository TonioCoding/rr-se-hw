"use client";

import useFormStore from "../zustand";

export default function PersonalInformationSummary() {
  const getFormData = useFormStore((state) => state.getState);

  return (
    <div className="summary md:border-r border-gray-300 text-center">
      <h1 className="">Personal Information</h1>
      <div className="summary-container">
        <h2 className="">First Name</h2>
        <p className="">{getFormData().personalInformation.firstName}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Middle Name</h2>
        <p className="">{getFormData().personalInformation.firstName}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Last Name</h2>
        <p className="">{getFormData().personalInformation.firstName}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Date of birth</h2>
        <p className="">{getFormData().personalInformation.dateOfBirth}</p>
      </div>
    </div>
  );
}
