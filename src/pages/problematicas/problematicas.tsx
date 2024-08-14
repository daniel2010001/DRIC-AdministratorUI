import { createProblematic } from "@/adapters";
import { Table } from "@/components";
import { useAsync } from "@/hooks";
import { EndpointProblem, Problem } from "@/models";
import { loadProblemsTable } from "@/services";
import { useState } from "react";

export const Problematicas = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  useAsync(loadProblemsTable(), (data: EndpointProblem[]) => {
    setProblems(data.map(createProblematic));
  });

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
