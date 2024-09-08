import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { headerData } from "./const";
import ModalData from "../../createData/ui/ModalData";
import { useDispatch, useSelector } from "react-redux";
import { getUserDoc } from "../../../entities/data/api";
import { AppDispatch, RootState } from "../../../app/providers/store";
import UpdateButton from "../../updateData/ui/UpdateButton";
import DeleteButton from "../../deleteData/ui/DeleteButton";
import Spinner from "../../../shared/ui/Spinner/Spinner";

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
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, status } = useSelector(
    (state: RootState) => state.userDocs
  );

  useEffect(() => {
    dispatch(getUserDoc());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between">
        <ModalData />
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
            {status === "loading" && (
              <StyledTableRow>
                <StyledTableCell colSpan={headerData.length}>
                <Spinner/>
                </StyledTableCell>
              </StyledTableRow>
            )}
            {status === "failed" && (
              <StyledTableRow>
                <StyledTableCell colSpan={headerData.length}>
                  Error: {error}
                </StyledTableCell>
              </StyledTableRow>
            )}
            {status === "succeeded" &&
              data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.companySigDate}</StyledTableCell>
                  <StyledTableCell>{row.companySignatureName}</StyledTableCell>
                  <StyledTableCell>{row.documentName}</StyledTableCell>
                  <StyledTableCell>{row.documentStatus}</StyledTableCell>
                  <StyledTableCell>{row.documentType}</StyledTableCell>
                  <StyledTableCell>{row.employeeNumber}</StyledTableCell>
                  <StyledTableCell>{row.employeeSigDate}</StyledTableCell>
                  <StyledTableCell>{row.employeeSignatureName}</StyledTableCell>
                  <StyledTableCell>
                    <Box className="flex gap-2">
                      <UpdateButton data={row} />
                      <DeleteButton id={row.id} />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
