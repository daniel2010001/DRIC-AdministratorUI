import {
  loadApplicants,
  loadCareers,
  loadProblems,
  searchProblem,
} from "./services";
import { createApplicant, createCareer, createProblematic } from "./adapters";
import { useAsync } from "./hooks";
import Background from "./pages/Background";

function App() {
  useAsync(loadApplicants(), (data) => {
    console.log("Applicants: ", data.map(createApplicant));
  });
  useAsync(loadCareers(), (data) => {
    console.log("Careers: ", data.map(createCareer));
  });
  useAsync(loadProblems(), (data) => {
    console.log("Problems: ", data.map(createProblematic));
  });
  const idProblem = 4;
  useAsync(searchProblem(idProblem), (data) => {
    console.log(`Problem whit id ${idProblem}: `, createProblematic(data));
  });

  return (
    <>
      <Background>
        <h1>Hello world</h1>
      </Background>
    </>
  );
}

export default App;
