import clsx from "clsx";
import { FC } from "react";

enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface ButtonProfileProps {
  user: string;
  btnStyle?: keyof typeof ButtonStyleEnum;
}

const ButtonProfile: FC<ButtonProfileProps> = ({
  user,
  btnStyle = ButtonStyleEnum.DARK,
}) => {
  const btnClassesStyle = clsx(
    "text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-btnSm active:bg-conduit-activeButtonProfile",
    {
      "border-conduit-lightBlack text-conduit-lightBlack hover:bg-conduit-hoverButtonProfile focus:bg-conduit-hoverButtonProfile ":
        btnStyle === ButtonStyleEnum.DARK,
      "border-conduit-hoverButtonProfile text-conduit-hoverButtonProfile hover:bg-conduit-hoverButtonProfile hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
    }
  );
  return (
    <button className={btnClassesStyle}>
      <i className="ion-plus-round"></i>&nbsp; Follow {user}
    </button>
  );
};

export default ButtonProfile;
