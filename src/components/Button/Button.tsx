import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

export enum ButtonSizeEnum {
  BASE = "BASE",
  LG = "LG",
}

interface ButtonProps {
  btnStyle?: keyof typeof ButtonStyleEnum;
  type?: ComponentProps<"button">["type"];
  size?: keyof typeof ButtonSizeEnum;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  btnStyle = ButtonStyleEnum.DARK,
  children,
  size = ButtonSizeEnum.BASE,
  ...buttonProps
}) => {
  const btnClassesStyle = clsx(
    "text-center align-middle cursor-pointer select-none borderactive:bg-conduit-activeButtonProfile",
    {
      "border-conduit-lightBlack text-conduit-lightBlack hover:bg-conduit-hoverButtonProfile focus:bg-conduit-hoverButtonProfile ":
        btnStyle === ButtonStyleEnum.DARK,
      "border-conduit-hoverButtonProfile text-conduit-hoverButtonProfile hover:bg-conduit-hoverButtonProfile hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
      "border-conduit-green bg-conduit-green text-white hover:bg-conduit-darkGreen hover:border-conduit-darkGreen active:bg-conduit-darkGreen":
        btnStyle === ButtonStyleEnum.GREEN,
      "py-1 px-2 text-sm  rounded-btnSm ": size === ButtonSizeEnum.BASE,
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
