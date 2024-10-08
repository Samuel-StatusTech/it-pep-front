import * as C from "../styles"
import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import SacrSubPage from "./SubPages/Sacr"
import CidSubPage from "./SubPages/Cid"
import AmbulatorySubPage from "./SubPages/Ambulatory"
import ExaminationInternalSubPage from "./SubPages/ExaminationInternal"
import ExaminationExternalSubPage from "./SubPages/ExaminationExternal"
import Tabs from "../../../components/Tabs"
import SideControl from "../../../components/SideControl"

// Relations
export type ISubPages = "sacr" | "cid" | "outpatient" | "internal" | "external"

const pagesRelations = {
  sacr: SacrSubPage,
  cid: CidSubPage,
  outpatient: AmbulatorySubPage,
  internal: ExaminationInternalSubPage,
  external: ExaminationExternalSubPage,
}

const OutpatientPage = () => {
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
            title: "Diagnóstico CID",
            targetPage: "cid",
          },
          {
            icon: <Icons.Paper />,
            title: "Atendimento Ambulatório",
            targetPage: "outpatient",
          },
          {
            icon: <Icons.Paper />,
            title: "Solicitações de exames interno",
            targetPage: "internal",
          },
          {
            icon: <Icons.Paper />,
            title: "Solicitações de exames externo",
            targetPage: "external",
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

export default OutpatientPage
