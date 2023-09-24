import { FC } from "react";

interface ButtonProfileProps {
  user: string;
}

const ButtonProfile: FC<ButtonProfileProps> = ({ user }) => {
  return (
    <button className="text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-btnSm border-conduit-lightBlack text-conduit-lightBlack hover:bg-conduit-hoverButtonProfile focus:bg-conduit-hoverButtonProfile active:bg-conduit-activeButtonProfile">
      <i className="ion-plus-round"></i>&nbsp; Follow {user}
    </button>
  );
};

export default ButtonProfile;
