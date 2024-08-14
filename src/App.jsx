import { Background, Problematicas, AddProblematicaPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ProblematicasTable } from "./pages/problematicas/ProblematicasTable";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<ProblematicasTable />}></Route>
        <Route path="/problems" element={<Problematicas />}></Route>
        <Route path="/forms" element={<AddProblematicaPage />} />
      </Routes>
    </Background>
  );
}

export default App;
