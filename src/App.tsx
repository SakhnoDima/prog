import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Article from "./components/Article/Article";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Article />
    </div>
  );
};

export default App;
