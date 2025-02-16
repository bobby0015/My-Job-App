import React from "react";
import { Menubar } from "./ui/menubar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Big device navbar */}
      <div className="hidden md:block">
        <Menubar className="w-full py-6 px-16 justify-between">
          <div>
            <h1 className="font-bold text-2xl">
              My <span>Job</span>
            </h1>
          </div>
          <nav>
            <ul className="flex font-semibold space-x-8">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Companies</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <Button>Login</Button>
          </div>
        </Menubar>
      </div>
      {/*  Small device navbar */}
      <div className="block md:hidden">
        <Menubar className="py-6 px-4 justify-between">
          <div>
            <h1 className="font-bold text-2xl">
              My <span>Job</span>
            </h1>
          </div>
          <Sheet>
            <SheetTrigger>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>My Job</SheetTitle>
              </SheetHeader>
              <div className="mt-10">
                <nav>
                    <ul className="space-y-8 font-semibold">
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li>
                          <a href="">About us</a>
                        </li>
                        <li>
                          <a href="">Jobs</a>
                        </li>
                        <li>
                          <a href="">Companies</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                    </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </Menubar>
      </div>
    </>
  );
};

export default Navbar;
