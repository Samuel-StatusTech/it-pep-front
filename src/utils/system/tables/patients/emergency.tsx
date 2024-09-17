import { TTableConfig } from ".."
import { Icons } from "../../../../assets/icons/_index"
import { TPatient, urgencyRelation } from "../../../@types/data/patient"
import * as S from "./styles"

export const emergencyTableConfig: TTableConfig<TPatient> = {
  columns: [
    { name: "Prioridade", field: "urgency", align: "center" },
    { name: "Protocolo", field: "protocol", align: "center" },
    { name: "Atendimento", field: "callNumber", align: "center" },
    { name: "Cod. Paciente", field: "code", align: "center" },
    { name: "Nome do Paciente", field: "name" },
    { name: "Nome social", field: "socialName" },
    { name: "Idade", field: "age", align: "center" },
    { name: "Status", field: "status", align: "center" },
    { name: "Recepção", field: "arrive", align: "center" },
    { name: "Procedimento", field: "procedure", align: "center" },
    { name: "Leito", field: "bed", align: "center" },
    { name: "Especialidade", field: "speciality", align: "center" },
    { name: "CID", field: "cid", align: "center" },
    { name: "Setor", field: "sector", align: "center" },
  ],
  specialFields: {
    bed: (item: TPatient) => item.bed,
    status: (item: TPatient) => {
      const renderStatus = () => {
        let children = []

        for (let i = 0; i <= item.status; i++) {
          children.push(<Icons.Exclamation key={i} />)
        }

        return children
      }

      return (
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
          {renderStatus()}
        </div>
      )
    },
    urgency: (item: TPatient) => (
      <S.UrgencyIndicator $color={urgencyRelation[item.urgency]} />
    ),
  },
  component: (item: TPatient) => <div>{item?.name}</div>,
}
