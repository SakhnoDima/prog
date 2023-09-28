import { FC } from "react";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import FeedPage from "./page/FeedPage";
import ProfilePage from "./page/ProfilePage";
import ArticlePage from "./page/ArticlePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div className="pb-16">
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </div>
  );
};

export default App;
