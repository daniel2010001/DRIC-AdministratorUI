import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { createProblematic } from "@/adapters";
import { useAsync } from "@/hooks";
import { Applicant, EndpointProblem, Problem } from "@/models";
import { loadProblemsTable } from "@/services";
import { ChangeEvent, useState } from "react";
import { TableView } from "@mui/icons-material";

interface Column {
  id: "id" | "title" | "applicant" | "updatedAt" | "publishedAt" | "acciones";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: Date) => string;
  formatObjet?: (value: Applicant) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "title", label: "Títuto", minWidth: 100 },
  {
    id: "applicant",
    label: "Solicitante",
    minWidth: 170,
    align: "right",
    formatObjet: (value: Applicant) => value.name,
  },
  {
    id: "updatedAt",
    label: "Actualizado",
    minWidth: 170,
    align: "right",
    format: (value: Date) => value.toDateString(),
  },
  {
    id: "publishedAt",
    label: "Publicado",
    minWidth: 170,
    align: "right",
    format: (value: Date) => value.toDateString(),
  },
  {
    id: "acciones",
    label: "Acciones",
    minWidth: 170,
    align: "right",
  },
];

export const ProblematicasTable = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  useAsync(loadProblemsTable(), (data: EndpointProblem[]) => {
    setProblems(data.map(createProblematic));
  });

  const rows = problems.map((problem) => {
    return {
      ...problem,
      acciones: (
        <>
          <button className="me-2 underline underline-offset-2 text-blue-600">
            Ver
          </button>
          <button className="underline underline-offset-2 text-blue-600">
            Editar
          </button>
        </>
      ),
    };
  });

  console.log("Formating>>>>", rows);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-xl pb-3">Problematicas</div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.formatObjet
                              ? column.formatObjet(value as Applicant)
                              : column.format
                              ? column.format(value as Date)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
