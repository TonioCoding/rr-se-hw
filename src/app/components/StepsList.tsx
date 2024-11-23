import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/Breadcrumb";

interface Props {
  currentStep: string;
}

export function StepsList(props: Props) {
  const { currentStep } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem
          className={
            currentStep !== null && currentStep === "account-type"
              ? "text-green-500"
              : ""
          }
        >
          Account Type
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem
          className={
            currentStep !== null && currentStep === "personal-info"
              ? "text-green-500"
              : ""
          }
        >
          Personal Information
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem
          className={
            currentStep !== null && currentStep === "contact-info"
              ? "text-green-500"
              : ""
          }
        >
          Contact Information
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem
          className={
            currentStep !== null && currentStep === "summary"
              ? "text-green-500"
              : ""
          }
        >
          Summary
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
