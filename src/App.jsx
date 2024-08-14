import { Background, Problematicas, AddProblematicaPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Problematicas />} />
        <Route path="/problems" element={<Problematicas />} />
        <Route path="/forms" element={<AddProblematicaPage />} />
      </Routes>
    </Background>
  );
}

export default App;
