import * as React from "react"
import * as S from "./styles"
import { useNavigate } from "react-router-dom"

import { theme as customTheme } from "../../theme"
import { styled } from "@mui/material/styles"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

import { Icons } from "../../assets/icons/_index"

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
  "& th": {
    whiteSpace: "nowrap",
  },
  "& td": {
    padding: 12,
    border: "none",
    transition: "background-color 0.2s",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  "&:hover td": {
    backgroundColor: customTheme.colors.neutral.ice,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const urgencyRelation: any = {
  1: "red",
  2: "yellow",
  3: "green",
  4: "blue",
}

type Props = {
  data: any[]
}

export default function CustomizedTables({ data }: Props) {
  const navigate = useNavigate()

  const renderUrgency = (level: number) => {
    return <S.UrgencyIndicator $color={urgencyRelation[level]} />
  }

  const renderStatus = (status: number) => {
    let children = []

    for (let i = 0; i <= status; i++) {
      children.push(<Icons.Exclamation key={i} />)
    }

    return children
  }

  const handlePatient = (patientId: string, origin: string) => {
    navigate(`/dashboard/${origin}/patient/${patientId}/allergy`)
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
          {data.map((row, k) => (
            <StyledTableRow
              key={k}
              onClick={() => handlePatient(row.id, row.origin)}
            >
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    width: "fit-content",
                    margin: "auto",
                  }}
                >
                  {renderStatus(row.status)}
                </div>
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
