/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";

import { createCustomProblemRequest } from "@/adapters";
import Search from "@/components/ui/table/search";
import { Table } from "@/components/ui/table/table";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { ProblemRequest } from "@/models";
import { HeadCell } from "@/models/Table.model";
import { getProblemsRequestsTable } from "@/services";

type ProblemTable = { [key: string]: string | number };

const headCells: readonly HeadCell<ProblemTable>[] = [
  {
    property: "index",
    label: "",
    numeric: true,
    disablePadding: true,
    align: "left",
    minWidth: "auto",
    isOrder: false,
  },
  {
    property: "title",
    label: "Título",
    numeric: false,
    disablePadding: false,
    isOrder: true,
  },
  {
    property: "applicant",
    label: "Entidad",
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
    property: "actions",
    label: "Acciones",
    numeric: false,
    disablePadding: false,
    isRequest: true,
    isOrder: true,
  },
];

export const Solicitudes = () => {
  const { callEndpoint } = useFetchAndLoader();
  const [problemsRequests, setProblemsRequests] = useState<ProblemRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);
  const loadProblems = async () => callEndpoint(getProblemsRequestsTable());
  useAsync(loadProblems, (data) => setProblemsRequests(data.map(createCustomProblemRequest)));

  const filteredRows = problemsRequests.filter(
    (requests) =>
      requests.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      requests.applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      requests.user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows: { [key: string]: string | number }[] = filteredRows.map((requests) => {
    const index = problemsRequests.indexOf(requests) + 1;
    return {
      index: index,
      id: requests.id,
      title: requests.title,
      applicant: requests.applicant.name,
      updatedAt: requests.updatedAt.toDateString(),
      actions: "Revisar",
    };
  });

  return (
    <div className="container mx-auto py-10">
      <div className="text-2xl font-medium text-gray-800 mb-4">
        Listado de solicitudes pendientes
      </div>
      <Search className="mb-4" searchFunction={SearchChange} width="w-full" height="h-12" />

      <Table headCells={headCells} rows={rows} />
    </div>
  );
};

export default Solicitudes;
