import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  avatar?: File;
}

export interface ContactInformation {
  emailAddress: string;
  phoneNumber: string;
  streetAddress: string;
  unit: string;
  city: string;
  state: string;
  postalCode: string;
}

export type AccountType = "Personal" | "Business" | string;

export interface StateObj {
  accountType: AccountType;
  personalInformation: PersonalInformation;
  contactInformation: ContactInformation;
  getState?: () => void;
  setAccountType: (type: AccountType) => void;
  setPersonalInformation?: (info: PersonalInformation) => void;
  setContactInformation?: (info: ContactInformation) => void;
}

const useFormStore = create<StateObj>()(
  persist(
    (set, get) => ({
      accountType: "",
      personalInformation: {
        firstName: "",
        lastName: "",
        middleName: "",
        dateOfBirth: "",
      },
      contactInformation: {
        emailAddress: "",
        phoneNumber: "",
        streetAddress: "",
        unit: "",
        city: "",
        state: "",
        postalCode: "",
      },
      getState: () => {
        return get();
      },
      setAccountType: (type) => {
        set((state: StateObj) => ({ ...state, accountType: type }));
      },
      setPersonalInformation: (info: PersonalInformation) => {
        set((state: StateObj) => ({ ...state, personalInformation: info }));
      },
      setContactInformation: (info) => {
        set((state: StateObj) => ({ ...state, contactInformation: info }));
      },
    }),
    { name: "data-storage" }
  )
);
export default useFormStore;
