"use client";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-[1rem] items-center py-[0.5rem] text-white bg-zinc-400">
      <h1>KYC Form</h1>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <a
          title="github-link"
          href="https://github.com/TonioCoding/rr-se-hw"
          className="hover:text-gray-300 transition-all ease-in-out duration-300"
        >
          <FaGithub />
        </a>
      </IconContext.Provider>
    </nav>
  );
}
