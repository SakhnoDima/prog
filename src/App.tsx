import { FC } from "react";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import FeedPage from "./page/FeedPage";
import ProfilePage from "./page/ProfilePage";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div className="pb-16">
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
