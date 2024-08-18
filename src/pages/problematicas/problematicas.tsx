/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";
import { EndpointProblem, Problem } from "@/models";
import { useAsync } from "@/hooks";
import { loadProblemsTable } from "@/services";
import { createProblematic } from "@/adapters";
import { HeadCell } from "@/models/Table.model";
import { Table } from "@/components/ui/table/table";

const headCells: readonly HeadCell<{ [key: string]: string | number }>[] = [
  {
    property: "id",
    label: "ID",
    numeric: true,
    disablePadding: true,
    align: "left",
    minWidth: "auto",
  },
  {
    property: "title",
    label: "Títuto",
    numeric: false,
    disablePadding: false,
  },
  {
    property: "applicant",
    label: "Solicitante",
    numeric: false,
    disablePadding: false,
    align: "center",
  },
  {
    property: "updatedAt",
    label: "Actualizado",
    numeric: false,
    disablePadding: false,
  },
  {
    property: "publishedAt",
    label: "Publicado",
    numeric: false,
    disablePadding: false,
  },
  {
    property: "actions",
    label: "Acciones",
    numeric: false,
    disablePadding: false,
    isAction: true,
  },
];

export const Problematicas = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useAsync(loadProblemsTable(), (data: EndpointProblem[]) => {
    setProblems(data.map(createProblematic));
  });

  const rows: { [key: string]: string | number }[] = problems.map((problem) => {
    return {
      id: problem.id,
      title: problem.title,
      applicant: problem.applicant?.name || "",
      updatedAt: problem.updatedAt.toDateString(),
      publishedAt: problem.publishedAt.toDateString(),
      actions: "ver, editar",
    };
  });

  return (
    <div className="container mx-auto py-10">
      <Table headCells={headCells} rows={rows} title="Problemas" />
    </div>
  );
};
