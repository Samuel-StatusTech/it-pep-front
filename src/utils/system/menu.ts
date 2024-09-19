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
        link: "allergy",
        tag: "allergy",
      },
      {
        icon: "outpatient",
        text: "Ambulatório",
        link: "outpatient",
        tag: "outpatient",
      },
      {
        icon: "files",
        text: "Resultado de exames",
        link: "results",
        tag: "results",
      },
      {
        icon: "urgency",
        text: "Urgência",
        link: "urgency",
        tag: "urgency",
      },
      {
        icon: "bed",
        text: "Internamento",
        link: "hospitalization",
        tag: "hospitalization",
        subtabs: [
          {
            text: "Enfermarias",
            link: "hospitalization/nursery",
            tag: "nursery",
          },
          {
            text: "Maternidade",
            link: "hospitalization/maternity",
            tag: "maternity",
          },
          {
            text: "Prontuário UTI",
            link: "hospitalization/utirecord",
            tag: "utirecord",
          },
        ],
      },
      {
        icon: "stethoscope",
        text: "Parecer",
        link: "opinion",
        tag: "opinion",
      },
      {
        icon: "medicalRecord",
        text: "Prontuário Cirúrgico",
        link: "medicalrecord",
        tag: "medicalrecord",
      },
      {
        icon: "documents",
        text: "Doc. outros profissionais",
        link: "documents",
        tag: "documents",
      },
    ],
    emergency: [],
    surgery: [],
  },
  secretary: [
    {
      icon: "care",
      text: "Cadastro Paciente",
      link: "register",
      tag: "register",
    },
    {
      icon: "outpatient",
      text: "Ambulatório",
      link: "outpatient",
      tag: "outpatient",
    },
    {
      icon: "files",
      text: "Consultar atendimento",
      link: "results",
      tag: "results",
    },
    {
      icon: "urgency",
      text: "Urgência",
      link: "urgency",
      tag: "urgency",
    },
    {
      icon: "bed",
      text: "Internamento",
      link: "hospitalization",
      tag: "hospitalization",
    },
    {
      icon: "stethoscope",
      text: "Parecer",
      link: "opinion",
      tag: "opinion",
    },
    {
      icon: "medicalRecord",
      text: "Prontuário Cirúrgico",
      link: "medicalrecord",
      tag: "medicalrecord",
    },
    {
      icon: "documents",
      text: "Doc. outros profissionais",
      link: "documents",
      tag: "documents",
    },
  ],
}

export const menu: TMenu = {
  side: sidemenuConfig,
}
