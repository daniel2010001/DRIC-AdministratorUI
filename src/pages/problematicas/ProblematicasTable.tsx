import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
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
import { loadProblemsTable } from "@/services";
import { Applicant, EndpointProblem, Problem } from "@/models";
import { ColumnTable } from "@/models";

const columns: ColumnTable[] = [
  {
    property: "id",
    label: "ID",
    minWidth: "auto",
  },
  {
    property: "title",
    label: "Títuto",
    minWidth: "auto",
  },
  {
    property: "applicant",
    label: "Solicitante",
    minWidth: "auto",
    align: "right",
    formatObjet: (value: Applicant) => value.name,
  },
  {
    property: "updatedAt",
    label: "Actualizado",
    minWidth: "auto",
    align: "right",
    format: (value: Date) => value.toDateString(),
  },
  {
    property: "publishedAt",
    label: "Publicado",
    minWidth: "auto",
    align: "right",
    format: (value: Date) => value.toDateString(),
  },
  {
    property: "acciones",
    label: "Acciones",
    minWidth: "auto",
    align: "right",
  },
];

export const ProblematicasTable = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useAsync(loadProblemsTable(), (data: EndpointProblem[]) => {
    setProblems(data.map(createProblematic));
  });

  const rows = problems.map((problem) => {
    return {
      ...problem,
      acciones: (
        <>
          <Link
            to={`/view/${problem.id}`}
            className="me-2 underline underline-offset-2 text-blue-600"
          >
            Ver
          </Link>
          <Link
            to={`/edit/${problem.id}`}
            className="underline underline-offset-2 text-blue-600"
          >
            Editar
          </Link>
        </>
      ),
    };
  });

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
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
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
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.property];
                      return (
                        <TableCell key={index} align={column.align}>
                          {column.property === "acciones"
                            ? value
                            : column.formatObjet
                            ? column.formatObjet(value as Applicant)
                            : column.format
                            ? column.format(value as Date)
                            : String(value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
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
