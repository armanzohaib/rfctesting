import { ButtonHTMLAttributes, ReactNode, RefObject } from "react";

export interface BsProps {
  solid: string;
  outline: string;
}

export type VsProps = {
  solid: {
    primary: string;
    info: string;
  };
  outline: {
    primary: string;
    info: string;
  };
};

export interface SsProps {
  sm: string;
  lg: string;
  md: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "primary" | "info";
  className?: string;
  href?: string;
  children?: ReactNode;
  loaderClass?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isLoading?: boolean;
}
