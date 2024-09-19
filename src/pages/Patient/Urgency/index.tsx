import * as C from "../styles"
import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import SacrSubPage from "./SubPages/Sacr"
import HemopeSubPage from "./SubPages/Hemope"
import HivSubPage from "./SubPages/Hiv"
import CidSubPage from "./SubPages/Cid"
import ClinicalSubPage from "./SubPages/Clinical"
import TermsSubPage from "./SubPages/Terms"
import OutmedicSubPage from "./SubPages/Outmedic"
import AdmissionSubPage from "./SubPages/Admission"

import Tabs from "../../../components/Tabs"
import SideControl from "../../../components/SideControl"

// Relations
export type ISubPages =
  | "sacr"
  | "hemope"
  | "hiv"
  | "cid"
  | "clinical"
  | "terms"
  | "outMedic"
  | "admission"

const pagesRelations = {
  sacr: SacrSubPage,
  hemope: HemopeSubPage,
  hiv: HivSubPage,
  cid: CidSubPage,
  clinical: ClinicalSubPage,
  terms: TermsSubPage,
  outMedic: OutmedicSubPage,
  admission: AdmissionSubPage,
}

const UrgencyPage = () => {
  const [subPage, setSubPage] = useState<ISubPages>("sacr")

  const handleClick = (page: ISubPages) => {
    setSubPage(page)
  }

  const renderSubPage = () => {
    const El = pagesRelations[subPage]
    return <El />
  }

  return (
    <S.Content>
      <Tabs
        list={[
          {
            icon: <Icons.Paper />,
            title: "Resumo SACR",
            targetPage: "sacr",
          },
          {
            icon: <Icons.Paper />,
            title: "HEMOPE - STS",
            targetPage: "hemope",
          },
          {
            icon: <Icons.Paper />,
            title: "Anti-HIV",
            targetPage: "hiv",
          },
          {
            icon: <Icons.Paper />,
            title: "Diagnóstico CID",
            targetPage: "cid",
          },
          {
            icon: <Icons.Paper />,
            title: "Encaminhamento Clínico",
            targetPage: "clinical",
          },
          {
            icon: <Icons.Paper />,
            title: "Termos",
            targetPage: "terms",
          },
          {
            icon: <Icons.Paper />,
            title: "Alta médica",
            targetPage: "outMedic",
          },
          {
            icon: <Icons.Paper />,
            title: "Admissão",
            targetPage: "admission",
          },
        ]}
        action={handleClick}
        actualPage={subPage}
      />

      <C.Principal>
        {renderSubPage()}
        <SideControl />
      </C.Principal>
    </S.Content>
  )
}

export default UrgencyPage
