/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";
import { Problem } from "@/models";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { getProblemsTable } from "@/services";
import { createCustomProblem } from "@/adapters";
import { HeadCell } from "@/models/Table.model";
import { Table } from "@/components/ui/table/table";

type ProblemTable = { [key: string]: string | number };

const headCells: readonly HeadCell<ProblemTable>[] = [
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
    align: "left",
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
    property: "estado",
    label: "Estado",
    numeric: false,
    disablePadding: false,
    isStatus: true,
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
  const { callEndpoint } = useFetchAndLoader();
  const [problems, setProblems] = useState<Problem[]>([]);

  const loadProblems = async () => callEndpoint(getProblemsTable());
  useAsync(loadProblems, (data) => setProblems(data.map(createCustomProblem)));

  const rows: { [key: string]: string | number }[] = problems.map((problem) => {
    return {
      id: problem.id,
      title: problem.title,
      applicant: problem.applicant.name,
      updatedAt: problem.updatedAt.toDateString(),
      publishedAt: problem.publishedAt.toDateString(),
      estado: problem.active ? "Publicado" : "No publicado",
      actions: "ver, editar",
    };
  });

  console.log(problems);

  return (
    <div className="container mx-auto py-10">
      <Table headCells={headCells} rows={rows} title="Problemas" />
    </div>
  );
};

export default Problematicas;
