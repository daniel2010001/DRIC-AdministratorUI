import { Background, AddProblematicaPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { EnhancedTable } from "./pages/problematicas/problematicas";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<EnhancedTable />}></Route>
        <Route path="/forms" element={<AddProblematicaPage />} />
      </Routes>
    </Background>
  );
}

export default App;
