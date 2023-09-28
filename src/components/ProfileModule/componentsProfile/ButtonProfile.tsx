import { ComponentProps, FC } from "react";
import Button, { ButtonStyleEnum } from "../../Button/Button";

interface ButtonProfileProps {
  user: string;
  btnStyle?: ComponentProps<typeof Button>["btnStyle"];
}

const ButtonProfile: FC<ButtonProfileProps> = ({
  user,
  btnStyle = ButtonStyleEnum.DARK,
}) => {
  return (
    <Button btnStyle={btnStyle}>
      <i className="ion-plus-round"></i>&nbsp; Follow {user}
    </Button>
  );
};

export default ButtonProfile;
