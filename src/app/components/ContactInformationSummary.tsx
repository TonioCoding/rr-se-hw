"use client";

import useFormStore from "../zustand";

export default function ContactInformationSummary() {
  const getFormData = useFormStore((state) => state.getState);

  return (
    <div className="summary">
      <h1 className="">Contact Information</h1>
      <div className="summary-container">
        <h2 className="">Email Address</h2>
        <p className="">{getFormData().contactInformation.emailAddress}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Phone number</h2>
        <p className="">{getFormData().contactInformation.phoneNumber}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Street address</h2>
        <p className="">{getFormData().contactInformation.streetAddress}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Type of building</h2>
        <p className="">{getFormData().contactInformation.typeOfBuilding}</p>
      </div>
      <div className="summary-container">
        <h2 className="">City</h2>
        <p className="">{getFormData().contactInformation.city}</p>
      </div>
      <div className="summary-container">
        <h2 className="">State</h2>
        <p className="">{getFormData().contactInformation.state}</p>
      </div>
      <div className="summary-container">
        <h2 className="">Postal code</h2>
        <p className="">{getFormData().contactInformation.postalCode}</p>
      </div>
    </div>
  );
}
