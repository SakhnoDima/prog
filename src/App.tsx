import { FC } from "react";
import Header from "./components/Header/Header";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
