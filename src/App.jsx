import { Background, AddProblematicaPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Problematicas } from "./pages/problematicas/problematicas";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Problematicas />}></Route>
        <Route path="/forms" element={<AddProblematicaPage />} />
      </Routes>
    </Background>
  );
}

export default App;
