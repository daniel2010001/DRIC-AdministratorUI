import "./App.css";
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
  /* useAsync(loadApplicants(), (data) => {
    console.log("Applicants: ", data.map(createApplicant));
  });
  useAsync(loadCareers(), (data) => {
    console.log("Careers: ", data.map(createCareer));
  }); */
  /* useAsync(loadProblems(), (data) => {
    console.log("Problems: ", data.map(createProblematic));
  }); */
  /* const idProblem = 4;
  useAsync(searchProblem(idProblem), (data) => {
    console.log(`Problem whit id ${idProblem}: `, createProblematic(data));
  });
 */
  return (
    <>
      <Routes>
        <Route path="/problematicas" element={<Problematicas />}></Route>
      </Routes>
    </>
  );
}

export default App;
