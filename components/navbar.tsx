import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="p-4 container mx-auto flex justify-between items-center">
      <Link href={"/"}>NextAuth</Link>
      <div className="flex gap-x-4">
        <Link href={"/login"}>
          <Button variant={"ghost"}>Login</Button>
        </Link>
        <Link href={"/register"}>
          <Button>Register</Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
