/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";
import { Problem } from "@/models";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { getProblemsTable } from "@/services";
import { createCustomProblem } from "@/adapters";
import { HeadCell } from "@/models/Table.model";
import { Table } from "@/components/ui/table/table";
import Search  from "@/components/ui/table/search";

type ProblemTable = { [key: string]: string | number };

const headCells: readonly HeadCell<ProblemTable>[] = [
  {
    property: "id",
    label: "ID",
    numeric: false,
    disablePadding: false,
    align: "left",
    minWidth: "auto",
    isOrder: false,
  },
  {
    property: "title",
    label: "Títuto",
    numeric: false,
    disablePadding: false,
    isOrder: true,
  },
  {
    property: "applicant",
    label: "Solicitante",
    numeric: false,
    disablePadding: false,
    align: "left",
    isOrder: true,
  },
  {
    property: "updatedAt",
    label: "Actualizado",
    numeric: false,
    disablePadding: false,
    isOrder: true,
  },
  {
    property: "publishedAt",
    label: "Publicado",
    numeric: false,
    disablePadding: false,
    isOrder: true,
  },
  {
    property: "estado",
    label: "Estado",
    numeric: false,
    disablePadding: false,
    isStatus: true,
    isOrder: true,
  },
  {
    property: "actions",
    label: "Acciones",
    numeric: false,
    disablePadding: false,
    isOrder: false,
    isAction: true,
  },
];

export const Problematicas = () => {
  const { callEndpoint } = useFetchAndLoader();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const SearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const loadProblems = async () => callEndpoint(getProblemsTable());
  useAsync(loadProblems, (data) => setProblems(data.map(createCustomProblem)));

  const filteredProblems = problems.filter((problem) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const title = problem.title?.toLowerCase() || '';
    const applicantName = problem.applicant?.name?.toLowerCase() || '';
    const estado = problem.active ? "publicado" : "no publicado";
    return (
      title.includes(lowerSearchTerm) ||
      applicantName.includes(lowerSearchTerm) ||
      estado.includes(lowerSearchTerm)
    );
  });

  const rows: { [key: string]: string | number }[] = filteredProblems.map((problem) => {
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


  return (
    <div className="container mx-auto py-10">
      <Search
        className="mb-4"
        searchFunction={SearchChange}
        width="w-full"
        height="h-12"
      />
      <Table headCells={headCells} rows={rows} title="Problemas" />
    </div>
  );
};

export default Problematicas;
