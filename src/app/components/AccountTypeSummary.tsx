"use client";

import useFormStore from "../zustand";

export default function AccountTypeSummary() {
  const getFormData = useFormStore((state) => state.getState);

  return (
    <div className="summary md:border-r border-gray-300">
      <h1 className="">Account Type</h1>
      <div className="summary-container text-center">
        <h2 className="">Type</h2>
        <p className="">{getFormData().accountType}</p>
      </div>
    </div>
  );
}
