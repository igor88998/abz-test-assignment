import React from "react";
import { useScrollTo } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import "./heroSection.css";

export const HeroSection: React.FC = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__text-content">
          <h1 className="hero-section__title">
            Test assignment for front-end developer
          </h1>
          <p className="hero-section__description">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
        </div>
        <div className="hero-section__button-container">
          <Button
            className="hero-section__button"
            onClick={() => scrollToElement("signup-form")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};
