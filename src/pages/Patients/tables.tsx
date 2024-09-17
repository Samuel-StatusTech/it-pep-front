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

import { tableConfig } from "../../utils/system/tables"

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

type Props = {
  origin: string
  data: any[]
}

export default function CustomizedTables({ origin, data }: Props) {
  const navigate = useNavigate()

  const config =
    tableConfig["patients"][origin as keyof typeof tableConfig.patients]

  const handlePatient = (patientId: string, origin: string) => {
    navigate(`/dashboard/${origin}/patient/${patientId}/allergy`)
  }

  return !config ? null : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {config.columns.map((col, k) => (
              <StyledTableCell key={k} align={col.align}>
                {col.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, k) => (
            <StyledTableRow
              key={k}
              onClick={() => handlePatient(row.id, row.origin)}
            >
              {config.columns.map((col, k) => {
                const content =
                  config.specialFields && config.specialFields[col.field]
                    ? config.specialFields[col.field](row)
                    : row[col.field]

                return (
                  <StyledTableCell key={k} align={col.align}>
                    {content}
                  </StyledTableCell>
                )
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
