import { LoadingFallback } from "@/components/Fallback";
import { NotFound } from "@/pages/NotFound";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => (
  <Suspense fallback={<LoadingFallback />}>
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);
