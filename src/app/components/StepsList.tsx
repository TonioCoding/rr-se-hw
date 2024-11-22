import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
          <BreadcrumbLink href="/steps/account-type">
            Account Type
          </BreadcrumbLink>
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
          <BreadcrumbLink href="/steps/personal-info">
            Personal Information
          </BreadcrumbLink>
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
          <BreadcrumbLink href="/steps/contact-info">
            Contact Information
          </BreadcrumbLink>
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
          <BreadcrumbLink href="/steps/summary">Summary</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
