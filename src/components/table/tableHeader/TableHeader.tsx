import { TableCell, TableHead, TableRow } from "@mui/material";
import { FunctionComponent } from "react";
// import styles from './tableHeaderStyles.module.css';

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