import { Route, Routes } from "react-router-dom";

import { Problematicas } from "./pages/problematicas/problematicas";
import { ProblematicasTable } from "./pages/problematicas/ProblematicasTable";

function App() {
  return (
    <>
      <Background>
      <Routes>
        <Route path="/problematicas" element={<Problematicas />}></Route>
        <Route path="/" element={<ProblematicasTable />}></Route>
      </Routes>
      </Background>
    </>
  );
}

export default App;
