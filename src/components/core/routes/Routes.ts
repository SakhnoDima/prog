import ArticlePage from "../../../page/ArticlePage";
import FeedPage from "../../../page/FeedPage";
import ProfilePage from "../../../page/ProfilePage";
import SignInPage from "../../../page/SignInPage";
import SignUpPage from "../../../page/SignUpPage";

export const routes = {
  globalFeed: {
    path: "/",
    Element: FeedPage,
  },
  personalFeed: {
    path: "/:personal-feed",
    Element: FeedPage,
  },
  profile: {
    path: "/:profile",
    Element: ProfilePage,
  },
  profileFavorites: {
    path: "/:profile/favorites",
    Element: ProfilePage,
  },
  singleArticle: {
    path: "/article/:slug",
    Element: ArticlePage,
  },
  signIn: {
    path: "/sign-in",
    Element: SignInPage,
  },
  signUp: {
    path: "/sign-un",
    Element: SignUpPage,
  },
};
