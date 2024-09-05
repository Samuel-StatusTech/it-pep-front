import { PSideMenuItem } from "../@types/components/SideMenuItem"

type TMenu = {
  side: {
    patient: {
      uti: PSideMenuItem[]
      emergency: PSideMenuItem[]
      surgery: PSideMenuItem[]
    }
    secretary: PSideMenuItem[]
  }
}

const sidemenuConfig: TMenu["side"] = {
  patient: {
    uti: [
      {
        icon: "care",
        text: "Classif. CCIH/Alergia",
        link: "",
        tag: "allergy",
      },
      {
        icon: "outpatient",
        text: "Ambulatório",
        link: "/outpatient",
        tag: "outpatient",
      },
      {
        icon: "files",
        text: "Resultado de exames",
        link: "/results",
        tag: "results",
      },
      {
        icon: "urgency",
        text: "Urgência",
        link: "/urgency",
        tag: "urgency",
      },
      {
        icon: "bed",
        text: "Internamento",
        link: "/hospitalization",
        tag: "hospitalization",
      },
      {
        icon: "stethoscope",
        text: "Parecer",
        link: "/opinion",
        tag: "opinion",
      },
      {
        icon: "medicalRecord",
        text: "Prontuário Cirúrgico",
        link: "/medicalrecord",
        tag: "medicalrecord",
      },
      {
        icon: "documents",
        text: "Doc. outros profissionais",
        link: "/documents",
        tag: "documents",
      },
    ],
    emergency: [],
    surgery: [],
  },
  secretary: [],
}

export const menu: TMenu = {
  side: sidemenuConfig,
}
