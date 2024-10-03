import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TableMUI from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { TableHeader } from "@/components/ui/table/header-table";
import { BodyTable } from "@/components/ui/table/body-table";
import { PaginationTable } from "@/components/ui/table/pagination-table";
import { HeadCell, Order } from "@/models";
import { getComparator, stableSort } from "@/utilities/shorting";
import { TableContainer } from "@mui/material";

interface EnhancedTableProps<T extends { [key: string]: string | number }> {
  headCells: readonly HeadCell<T>[];
  rows: T[];
}

export const Table = <T extends { [key: string]: string | number }>({
  headCells,
  rows,
}: EnhancedTableProps<T>) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(""); // Provide a default value for orderBy
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof T) => {
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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(() => {
    return stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, rows]);

  return (
    <div className="container mx-auto">
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <TableMUI
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
            </TableMUI>
          </TableContainer>
          <PaginationTable
            rowsPerPageOptions={[10, 25, 100]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Reducir celdas"
        />
      </Box>
    </div>
  );
};
