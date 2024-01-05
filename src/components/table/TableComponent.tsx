import { TableContainer, Paper, Table } from "@mui/material";
import { FunctionComponent } from "react";
import TableHeader from "./tableHeader/TableHeader";

interface ITableComponentProps {
  tableHeaders: string[];
}

const TableComponent: FunctionComponent<ITableComponentProps> = ({ tableHeaders }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHeader tableHeaders={tableHeaders} />
      </Table>
    </TableContainer>
  );
}

export default TableComponent;