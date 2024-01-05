import { TableCell, TableHead, TableRow } from "@mui/material";
import { FunctionComponent } from "react";

interface ITableHeaderProps {
  tableHeaders: string[];
}

const TableHeader: FunctionComponent<ITableHeaderProps> = ({ tableHeaders }) => {

  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map(header => (
          <TableCell align="right">{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;