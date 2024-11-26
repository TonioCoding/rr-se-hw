"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

export default function Home() {
  const router = useRouter();
  return (
    <section className="text-black text-center grid grid-cols-1 items-center">
      <div className="grid grid-cols-1 items-center gap-[1rem]">
        <h1 className="text-xl underline underline-offset-8">
          RR SE HW &#8208; KYC App
        </h1>
        <p className="text-gray-500">
          Lightweight application to simulate a Know Your Customer form process
        </p>
        <Button
          onClick={() => {
            router.push(`/steps/account-type`);
          }}
          className="bg-blue-500 max-w-[100px] place-self-center"
        >
          Start
        </Button>
      </div>
    </section>
  );
}
