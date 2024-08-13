import { Table } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export const Problematicas = () => {
  const [problems, setProblems] = useState([]);

  /* useAsync(loadProblemsTable(), (data) => {
    console.log("Problems: ", data.map(createProblematic));
  }); */

  useEffect(() => {
    const loadProblematicsTable = async () => {
      const data = await axios.get(
        "http://localhost:4000/api/problematicas/tabla"
      );
      setProblems(data.data);
    };

    loadProblematicsTable();
  }, []);

  return (
    <div>
      <h1>Problematicas</h1>
      {/* Search por institucion, titulo y carrera */}
      <Table
        columns={[
          "id_problematica",
          "titulo",
          /*  "solicitante", */
          "actualizado",
          "Fecha de publicación",
          "publicado",
          "Acciones",
        ]}
        data={problems}
        pageSize={3}
        pageIndex={0}
        width="100%"
      />
    </div>
  );
};
