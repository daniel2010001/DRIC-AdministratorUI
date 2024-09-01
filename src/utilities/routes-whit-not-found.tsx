import { Route, Routes } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => (
  <Routes>
    {children}
    <Route path="*" element={<div>404</div>} />
  </Routes>
);
