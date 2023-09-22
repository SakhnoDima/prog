import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
