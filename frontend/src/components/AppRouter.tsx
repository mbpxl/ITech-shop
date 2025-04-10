import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { Context } from "../main";

const AppRouter = () => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { user } = context;
  return (
    <Routes>
      {user._isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default AppRouter;
