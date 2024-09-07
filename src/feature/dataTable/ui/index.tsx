import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { headerData } from "./const";
import ModalData from "../../createData/ui/ModalData";

const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DataTable: React.FC = () => {
  // Данные и загрузка временно убраны для упрощения
  // const { data, loading } = useDataTable(token);

  return (
    <>
      <div className="flex justify-between">
        <ModalData/>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headerData.map((el) => (
                <StyledTableCell>{el}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.companySigDate}</StyledTableCell>
              <StyledTableCell>{row.companySignatureName}</StyledTableCell>
              <StyledTableCell>{row.documentName}</StyledTableCell>
              <StyledTableCell>{row.documentStatus}</StyledTableCell>
              <StyledTableCell>{row.documentType}</StyledTableCell>
              <StyledTableCell>{row.employeeNumber}</StyledTableCell>
              <StyledTableCell>{row.employeeSigDate}</StyledTableCell>
              <StyledTableCell>{row.employeeSignatureName}</StyledTableCell>
            </StyledTableRow>
          )) */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
