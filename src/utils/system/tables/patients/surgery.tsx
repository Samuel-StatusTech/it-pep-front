import { TTableConfig } from ".."
import { TPatient } from "../../../@types/data/patient"
import { relations } from "../../relations"

export const surgeryTableConfig: TTableConfig<TPatient> = {
  columns: [
    { name: "Status", field: "status", align: "center" },
    { name: "Protocolo", field: "protocol", align: "center" },
    { name: "Atendimento", field: "callNumber", align: "center" },
    { name: "Cod. Paciente", field: "code", align: "center" },
    { name: "Nome do Paciente", field: "name" },
    { name: "Nome social", field: "socialName" },
    { name: "Idade", field: "age", align: "center" },
    { name: "Recepção", field: "arrive", align: "center" },
    { name: "Procedimento", field: "procedure", align: "center" },
    { name: "Leito", field: "bed", align: "center" },
    { name: "Especialidade", field: "speciality", align: "center" },
    { name: "CID", field: "cid", align: "center" },
    { name: "Setor", field: "sector", align: "center" },
  ],
  specialFields: {
    status: (item: TPatient) =>
      relations.status.patientsCirurgy[
        item.status as keyof typeof relations.status.patientsCirurgy
      ],
  },
  component: (item: TPatient) => <div>{item?.name}</div>,
}
