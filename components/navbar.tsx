import React from "react";
import Link from "next/link";

import { ModeToggle } from "./toggle-theme";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
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
