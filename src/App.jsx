import {
  loadApplicants,
  loadCareers,
  loadProblems,
  searchProblem,
} from "./services";
import { createApplicant, createCareer, createProblematic } from "./adapters";
import { useAsync } from "./hooks";
import { Route, Routes } from "react-router-dom";

import { Problematicas } from "./pages/problematicas/problematicas";

function App() {
  return (
    <>
      <Background>
      <Routes>
        <Route path="/problematicas" element={<Problematicas />}></Route>
      </Routes>
      </Background>
    </>
  );
}

export default App;
