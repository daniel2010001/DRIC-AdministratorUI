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
    <div className="container mx-auto">
      <div className="text-4xl">Problematicas</div>
      {/* Search por institucion, titulo y carrera */}
      <Table
        columns={[
          "id_problematica",
          "titulo",
          /*  "solicitante", */
          "actualizado",
          "publicado",
          "Acciones",
        ]}
        data={problems}
        pageSize={4}
        pageIndex={0}
        width="100%"
      />
    </div>
  );
};
