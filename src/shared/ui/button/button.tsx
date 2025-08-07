import { forwardRef } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { clsx } from "clsx";
import "./button.css";
import { ButtonSize, ButtonType } from "./types.ts";
import type { ButtonProps } from "./types.ts";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = ButtonSize.MEDIUM,
      btnType = ButtonType.PRIMARY,
      loading,
      disabled,
      children,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const buttonClasses = `button button--${size} button--${btnType} ${
      disabled ? "button--disabled" : ""
    } ${loading ? "button--loading" : ""} ${className || ""}`.trim();

    return (
      <button
        ref={ref}
        type={type}
        {...props}
        disabled={disabled || loading}
        className={buttonClasses}
      >
        {loading ? (
          <span className="button__loader">
            <LuLoaderCircle size={20} className={clsx("animate-spin")} />
          </span>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  },
);

export default Button;
