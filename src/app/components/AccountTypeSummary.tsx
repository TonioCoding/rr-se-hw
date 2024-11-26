"use client";

import useFormStore from "../zustand";

export default function AccountTypeSummary() {
  const getFormData = useFormStore((state) => state.getState);

  return (
    <div className="summary">
      <h1 className="">Account Type</h1>
      <div className="summary-container">
        <h2 className="">Type</h2>
        <p className="">{getFormData().accountType}</p>
      </div>
    </div>
  );
}
