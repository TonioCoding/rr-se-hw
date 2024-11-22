"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

export default function Home() {
  const router = useRouter();
  return (
    <section className="text-black text-center mt-[1rem]">
      <div>
        <h1>RR SE HW KYC App</h1>
        <p>
          Lightweight application to simulate Know Your Customer form process
        </p>
        <Button
          onClick={() => {
            router.push(`/steps/account-type`);
          }}
          className="bg-blue-500 max-w-[100px]"
        >
          Start
        </Button>
      </div>
    </section>
  );
}
