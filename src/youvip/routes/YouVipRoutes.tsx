import { Navigate, Route, Routes } from "react-router-dom";
import { YouVipPage } from "../pages";


export const YouVipRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<YouVipPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
