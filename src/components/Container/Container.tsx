import { FC, PropsWithChildren } from "react";

interface IContainerProps {}

const Container: FC<PropsWithChildren<IContainerProps>> = ({ children }) => {
  return (
    <div className="desktop:max-w-screen-xl laptop:max-w-screen-laptop tablet:max-w-screen-tablet mx-auto">
      {children}
    </div>
  );
};

export default Container;
