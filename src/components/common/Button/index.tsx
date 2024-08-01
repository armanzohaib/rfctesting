import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";
import {
  BsProps,
  IButtonProps,
  SsProps,
  VsProps,
} from "@/interfaces/button.interface";

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center items-center h-16 rounded-full border-2 whitespace-nowrap leading-none font-black disabled:cursor-not-allowed disabled:text-black",
  outline:
    "inline-flex justify-center items-center h-16 outline-none rounded-full whitespace-nowrap leading-none font-black border-2 disabled:cursor-not-allowed disabled:text-black",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "bg-primary text-[#010F1C] active:text-primary/80 border-primary hover:border-primary disabled:opacity-30 disabled:hover:bg-primary disabled:text-black hover:bg-black hover:text-primary",
    info: "bg-primary-foreground text-white active:text-primary-foreground/80 border-primary-foreground hover:border-primary-foreground disabled:opacity-30 disabled:hover:bg-primary-foreground disabled:text-black hover:bg-black hover:text-primary-foreground",
  },
  outline: {
    primary:
      "border-primary hover:text-black text-primary hover:bg-primary active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:text-black disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent",
    info: "border-primary hover:text-black text-primary hover:bg-primary active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:text-black disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-9 py-4 text-base",
  lg: "px-7 py-2 text-base",
};
const Button = ({
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type || "button"}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          <ImSpinner9 className={clsx("animate-spin text-sm", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
};
export default Button;
