import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Feed from "./components/Feed/Feed";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;
