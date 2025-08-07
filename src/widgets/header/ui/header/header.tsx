import React from "react";
import logo from "@/shared/assets/svg/logo.svg";
import { useScrollTo } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";
import "./header.css";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { scrollToElement } = useScrollTo();

  return (
    <>
      <header className={clsx(className, "header")}>
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__buttons">
            <Button>Users</Button>
            <Button onClick={() => scrollToElement("signup-form")}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
