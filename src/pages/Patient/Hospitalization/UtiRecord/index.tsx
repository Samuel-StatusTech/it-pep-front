import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../../assets/icons/_index"

import TermsSubPage from "./SubPages/Terms"
import CidSubPage from "./SubPages/Cid"
import AdmissionSubPage from "./SubPages/Admission"
import InterSubPage from "./SubPages/Inter"
import PrescriptionSubPage from "./SubPages/Prescription"

import Tabs from "../../../../components/Tabs"
import SideControl from "../../../../components/SideControl"

// Relations
export type ISubPages =
  | "cid"
  | "admission"
  | "evolution"
  | "inter"
  | "prescription"

const pagesRelations = {
  cid: CidSubPage,
  admission: AdmissionSubPage,
  evolution: TermsSubPage,
  inter: InterSubPage,
  prescription: PrescriptionSubPage,
}

const UtiRecordSPage = () => {
  const [subPage, setSubPage] = useState<ISubPages>("cid")

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
            title: "CID | Diagnóstico",
            targetPage: "cid",
          },
          {
            icon: <Icons.Paper />,
            title: "Admissão",
            targetPage: "admission",
          },
          {
            icon: <Icons.Paper />,
            title: "Evolução",
            targetPage: "evolution",
          },
          {
            icon: <Icons.Paper />,
            title: "Intercorrência",
            targetPage: "inter",
          },
          {
            icon: <Icons.Paper />,
            title: "Prescrição",
            targetPage: "prescription",
          },
        ]}
        action={handleClick}
        actualPage={subPage}
      />

      <S.Principal>
        {renderSubPage()}
        <SideControl />
      </S.Principal>
    </S.Content>
  )
}

export default UtiRecordSPage
