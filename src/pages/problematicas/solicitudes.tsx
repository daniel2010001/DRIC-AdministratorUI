/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";
import { Problem, ProblemRequest, User } from "@/models";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { getProblemsRequestsTable } from "@/services";
import { createCustomProblem, createCustomProblemRequest } from "@/adapters";
import { HeadCell } from "@/models/Table.model";
import { Table } from "@/components/ui/table/table";
import Search from "@/components/ui/table/search";

type ProblemTable = { [key: string]: string | number };

const headCells: readonly HeadCell<ProblemTable>[] = [
  {
    property: "id",
    label: "ID",
    numeric: true,
    disablePadding: true,
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
    property: "user",
    label: "Becario",
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
  const [problemsRequests, setProblemsResquests] = useState<ProblemRequest[]>( [] );
  const [searchTerm, setSearchTerm] = useState("");

  const SearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const loadProblems = async () => callEndpoint(getProblemsRequestsTable());
  useAsync(loadProblems, (data) =>
    setProblemsResquests(data.map(createCustomProblemRequest))
  );

  const filteredRows = problemsRequests.filter((requests) =>
    requests.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    requests.applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    requests.user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows: { [key: string]: string | number }[] = filteredRows.map(
    (requests) => {
      return {
        id: requests.id,
        title: requests.title,
        applicant: requests.applicant.name,
        updatedAt: requests.updatedAt.toDateString(),
        publishedAt: requests.publishedAt.toDateString(),
        user: requests.user.username,
        actions: "Revisar",
      };
    }
  );

  return (

    <div className="container mx-auto py-10">
      <Search
        className="mb-4"
        searchFunction={SearchChange}
        width="w-full"
        height="h-10"
      />

    <div className="container mx-auto py-10 ">
      <Table headCells={headCells} rows={rows} title="Listado de solicitudes pendientes" />
    </div>
    </div>
  );
};

export default Solicitudes;
