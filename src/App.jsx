import { Background, Login, Problematicas, ProblemForm } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Problematicas />} />
        <Route path="/forms" element={<ProblemForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Background>
  );
}

export default App;
