import { FC, PropsWithChildren } from "react";

interface IContainerProps {}

const Container: FC<PropsWithChildren<IContainerProps>> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
