import { FC } from "react";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import { routes } from "./components/core/routes/Routes";
import { nanoid } from "@reduxjs/toolkit";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <div className="pb-16">
      <Header />
      <Routes>
        {Object.values(routes).map((rote) => (
          <Route key={nanoid()} path={rote.path} element={<rote.Element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
