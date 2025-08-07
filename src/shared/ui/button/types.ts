import type { ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  MEDIUM = "medium",
}

export enum ButtonType {
  PRIMARY = "primary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  btnType?: ButtonType;
  loading?: boolean;
}
