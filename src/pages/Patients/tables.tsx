import * as React from "react"
import * as S from "./styles"

import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { theme as customTheme } from "../../theme"
import { Icons } from "../../assets/icons/_index"
import { patientsMock } from "./patients"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: customTheme.colors.backgrounds.tableHeader,
    color: customTheme.colors.blue.medium,
    fontWeight: 700,
    fontSize: 16,
    whiteSpace: "nowrap",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(31, 38, 44, 0.5)",
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    fontFamily: "Roboto",
  },
  "& td": {
    padding: 12,
    border: "none",
    transition: "background-color 0.2s",
    cursor: "pointer",
  },
  "&:hover td": {
    backgroundColor: customTheme.colors.neutral.ice,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    whiteSpace: "nowrap",
  },
}))

const rows = patientsMock

const urgencyRelation: any = {
  1: "red",
  2: "yellow",
  3: "green",
  4: "blue",
}

export default function CustomizedTables() {
  const renderUrgency = (level: number) => {
    return <S.UrgencyIndicator $color={urgencyRelation[level]} />
  }

  const renderStatus = (status: number) => {
    let children = []

    for (let i = 0; i <= status; i++) {
      children.push(<Icons.Exclamation />)
    }

    return children
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Prioridade</StyledTableCell>
            <StyledTableCell align="left">Protocolo</StyledTableCell>
            <StyledTableCell align="left">Atendimento</StyledTableCell>
            <StyledTableCell align="left">Cod. Paciente</StyledTableCell>
            <StyledTableCell align="left">Nome do Paciente</StyledTableCell>
            <StyledTableCell align="left">Nome social</StyledTableCell>
            <StyledTableCell align="left">Idade</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Recepção</StyledTableCell>
            <StyledTableCell align="center">Procedimento</StyledTableCell>
            <StyledTableCell align="center">Leito</StyledTableCell>
            <StyledTableCell align="center">Especialidade</StyledTableCell>
            <StyledTableCell align="center">CID</StyledTableCell>
            <StyledTableCell align="center">Setor</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                {renderUrgency(row.urgency)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.protocol}</StyledTableCell>
              <StyledTableCell align="center">{row.callNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.code}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.socialName}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">
                {renderStatus(row.status)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.arrive}</StyledTableCell>
              <StyledTableCell align="center">{row.procedure}</StyledTableCell>
              <StyledTableCell align="center">{row.bed}</StyledTableCell>
              <StyledTableCell align="center">{row.speciality}</StyledTableCell>
              <StyledTableCell align="center">{row.cid}</StyledTableCell>
              <StyledTableCell align="center">{row.sector}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
