import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useAuth } from "../hooks/useAuthe";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const { isLoggedIn, logOut, user } = useAuth();
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(" py-navItem hover:text-black/60", {
      "text-black/30": !isActive,
      "text-black/70": isActive,
    });

  return (
    <header>
      <nav className="px-4 py-2">
        <Container>
          <div className="flex justify-between items-center">
            <NavLink
              to="/"
              className="font-titillium text-2xl mr-8 text-conduit-green"
            >
              conduit
            </NavLink>
            <ul className="pl-0 mb-0 list-none flex ">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="ml-4">
                    <NavLink to="/editor" className={navLinkClasses}>
                      <i className="mr-1 ion-compose" />
                      New Article
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink to="/settings" className={navLinkClasses}>
                      <i className="mr-1 ion-gear-a" />
                      Settings
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to={`/${user?.username}`}
                      className={navLinkClasses}
                    >
                      <img
                        src={user?.image}
                        alt={user?.username}
                        className="w-6 h-6 rounded-full inline mr-2"
                      ></img>
                      {user?.username}
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to="/sign-in"
                      className={navLinkClasses}
                      onClick={logOut}
                    >
                      Log out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="ml-4">
                    <NavLink to="/sign-in" className={navLinkClasses}>
                      Sign In
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink to="/sign-up" className={navLinkClasses}>
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
