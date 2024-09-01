import { HeadCell } from "@/models/Table.model";
import { updateProblemPublished } from "@/services";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface GenericTableBodyProps<T> {
  headCells: readonly HeadCell<T>[];
  visibleRows: T[];
  emptyRows: number;
  dense: boolean;
}

export const BodyTable = <T,>({
  headCells,
  visibleRows,
  emptyRows,
  dense,
}: GenericTableBodyProps<T>) => {
  const token = localStorage.getItem("token");

  const renderActions = (id: number) => {
    return (
      <>
        <Link
          to={`/problem/view/${id}`}
          className="me-2 underline underline-offset-2 text-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`/problem/edit/${id}`}
          className="underline underline-offset-2 text-blue-600"
        >
          Editar
        </Link>
      </>
    );
  };

  const changeStatus = (id: number, status: string) => {
    console.log(status);

    if (token !== null) {
      updateProblemPublished(
        id,
        status === "Publicado" ? true : false,
        token
      )().then((data) => {
        console.log(data);
      });
    }
  };

  const renderStatus = (status: string, id: number) => {
    const [selectedStatus, setSelectedStatus] = useState(status);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newStatus = e.target.value;
      setSelectedStatus(newStatus);
      changeStatus(id, newStatus);
    };

    return (
      <select
        className={`bg-transparent ${
          selectedStatus === "Publicado" ? "text-green-500" : "text-red-500"
        }`}
        onChange={handleChange}
        value={selectedStatus}
      >
        <option className="text-green-500" value="Publicado" id="publicado">
          Publicado
        </option>
        <option className="text-red-500" value="No publicado" id="no-publicado">
          No publicado
        </option>
      </select>
    );
  };

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            {headCells.map((headCell) => {
              const value = row[headCell.property];
              return (
                <TableCell
                  key={String(headCell.property)}
                  align={headCell.align ? headCell.align : "left"}
                >
                  {headCell.isAction
                    ? renderActions((row as { id: number })["id"])
                    : headCell.isStatus && headCell.property === "estado"
                    ? renderStatus(
                        value as string,
                        (row as { id: number })["id"]
                      )
                    : headCell.property === "updatedAt" ||
                      headCell.property === "publishedAt"
                    ? new Date(value as string).toLocaleDateString()
                    : String(value)}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={headCells.length} />
        </TableRow>
      )}
    </TableBody>
  );
};
