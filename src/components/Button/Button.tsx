import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
  GREEN = "GREEN",
  DANGER = "DANGER",
}

export enum ButtonSizeEnum {
  BASE = "BASE",
  LG = "LG",
}
export enum ButtonVariantEnum {
  BASE = "BASE",
  OUTLINE = "OUTLINE",
}
interface ButtonProps {
  variant?: keyof typeof ButtonVariantEnum;
  btnStyle?: keyof typeof ButtonStyleEnum;
  type?: ComponentProps<"button">["type"];
  size?: keyof typeof ButtonSizeEnum;
  disabled?: ComponentProps<"button">["disabled"];
  onClick?: ComponentProps<"button">["onClick"];
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = ButtonVariantEnum.BASE,
  btnStyle = ButtonStyleEnum.DARK,
  children,
  size = ButtonSizeEnum.BASE,
  ...buttonProps
}) => {
  const btnClassesStyle = clsx(
    "text-center align-middle cursor-pointer select-none border rounded active:bg-conduit-gray-650 disabled:opacity-70",
    {
      "border-conduit-gray-700 text-conduit-gray-700 hover:bg-conduit-gray-400 focus:bg-conduit-gray-400":
        btnStyle === ButtonStyleEnum.DARK,
      "border-conduit-gray-400 text-conduit-gray-400 hover:bg-conduit-gray-400 hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
      "border-conduit-green active:bg-conduit-darkGreen":
        btnStyle === ButtonStyleEnum.GREEN,
      "bg-conduit-green text-white hover:bg-conduit-darkGreen hover:border-conduit-darkGreen hover:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.BASE,
      "bg-white text-conduit-green hover:bg-conduit-green hover:text-white disabled:bg-conduit-darkGreen disabled:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.OUTLINE,
      "border-conduit-red text-conduit-red hover:bg-conduit-red focus:bg-conduit-red hover:text-white disabled:bg-conduit-red disabled:text-white disabled:cursor-not-allowed":
        btnStyle === ButtonStyleEnum.DANGER,
      "py-1 px-2 text-sm rounded-buttonSm": size === ButtonSizeEnum.BASE,
      "py-3 px-6 text-xl rounded": size === ButtonSizeEnum.LG,
    }
  );
  return (
    <button {...buttonProps} className={btnClassesStyle}>
      {children}
    </button>
  );
};

export default Button;
