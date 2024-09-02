/* NO TOCAR esto, porque se rompe xd */
import { useState } from "react";
import { Problem, ProblemRequest, User } from "@/models";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { getProblemsRequestsTable } from "@/services";
import { createCustomProblem, createCustomProblemRequest } from "@/adapters";
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
    property: "user",
    label: "Becario",
    numeric: false,
    disablePadding: false,
  },
  {
    property: "actions",
    label: "Acciones",
    numeric: false,
    disablePadding: false,
    isRequest: true,
  },
];

export const Solicitudes = () => {
  const { callEndpoint } = useFetchAndLoader();
  const [problemsRequests, setProblemsResquests] = useState<ProblemRequest[]>(
    []
  );

  const loadProblems = async () => callEndpoint(getProblemsRequestsTable());
  useAsync(loadProblems, (data) =>
    setProblemsResquests(data.map(createCustomProblemRequest))
  );

  const rows: { [key: string]: string | number }[] = problemsRequests.map(
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
      <div>Solicitudes</div>
      <Table headCells={headCells} rows={rows} title="Solicitudes" />
    </div>
  );
};

export default Solicitudes;
