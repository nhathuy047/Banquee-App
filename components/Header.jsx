import { ButtonS } from "../core/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

import { MenuButton } from "../core/BurgerMenu";
import { DesktopNav } from "./DesktopNav";
import { MobileNav, MobileOverlay } from "./MobileNav";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
    }
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>{isOpen && <MobileOverlay />}</AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 flex  items-center justify-between bg-white px-5 py-3 font-medium md:px-12">
        <div>
          <Link href="/">
            <h3
              onClick={() => setOpen(false)}
              className="cursor-pointer font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-2xl"
            >
              banquee.
            </h3>
          </Link>
        </div>
        <DesktopNav />
        <div className="flex items-center justify-end gap-4 font-heading sm:gap-7 ">
          {isLoggedIn ? (
            // If logged in, display the username
            <p>Welcome, {localStorage.getItem("username")}!</p>
          ) : (
            // If not logged in, display the login link
            <Link
              href="/login"
              className="hidden text-lg tracking-tight text-primary lg:flex"
            >
              Login
            </Link>
          )}
          <Link href="/compare">
            <a>
              <ButtonS className="z-30">Open Account</ButtonS>
            </a>
          </Link>
          <MenuButton
            isOpen={isOpen}
            height={15}
            strokeWidth="3"
            color="#5BB5A2"
            onClick={() => setOpen(!isOpen)}
            className="flex lg:hidden"
          />
        </div>
        <AnimatePresence>
          {isOpen && <MobileNav setOpen={setOpen} />}
        </AnimatePresence>
      </header>
    </>
  );
};
