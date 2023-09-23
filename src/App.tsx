import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Feed from "./components/Feed/Feed";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div className="pb-16">
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;
