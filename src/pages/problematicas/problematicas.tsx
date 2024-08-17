/* NO TOCAR esto, porque se rompe xd */
import { createTheme } from "@mui/material/styles";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { EndpointProblem, Problem } from "@/models";
import { useAsync } from "@/hooks";
import { loadProblemsTable } from "@/services";
import { createProblematic } from "@/adapters";
import { Link } from "react-router-dom";
import { Problems } from "@/models/Table.model";
import { Order } from "@/models/Table.model";
import { HeadCell } from "@/models/Table.model";
import { stableSort, getComparator } from "@/utilities/shorting";
import { TableHeader } from "@/components/ui/table/header-table";
import { BodyTable } from "@/components/ui/table/body-table";
import { PaginationTable } from "@/components/ui/table/pagination-table";

const headCells: readonly HeadCell<Problems>[] = [
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

export const EnhancedTable = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Problems>("title");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useAsync(loadProblemsTable(), (data: EndpointProblem[]) => {
    setProblems(data.map(createProblematic));
  });

  const rows: Problems[] = problems.map((problem) => {
    return {
      id: problem.id,
      title: problem.title,
      applicant: problem.applicant.name,
      updatedAt: problem.updatedAt.toDateString(),
      publishedAt: problem.publishedAt.toDateString(),
      actions: "ver, editar",
    };
  });

  const actions = (id: number) => {
    return (
      <>
        <Link
          to={`/view/${id}`}
          className="me-2 underline underline-offset-2 text-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`/edit/${id}`}
          className="underline underline-offset-2 text-blue-600"
        >
          Editar
        </Link>
      </>
    );
  };

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Problems
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(() => {
    return stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, rows]);

  return (
    <div className="container mx-auto py-10">
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Lista de problematicas
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <TableHeader
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                headCells={headCells}
              />
              <BodyTable
                headCells={headCells}
                visibleRows={visibleRows}
                emptyRows={emptyRows}
                dense={dense}
              />
            </Table>
          </TableContainer>
          <PaginationTable
            rowsPerPageOptions={[5, 10, 25]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Achatar tabla"
        />
      </Box>
    </div>
  );
};
