import * as C from "../styles"
import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"

import DescriptionSubPage from "./SubPages/Description"

import Tabs from "../../../components/Tabs"
import SideControl from "../../../components/SideControl"

// Relations
export type ISubPages = "description" | "pre" | "anesthesia" | "recover"

const pagesRelations = {
  description: DescriptionSubPage,
  pre: DescriptionSubPage,
  anesthesia: DescriptionSubPage,
  recover: DescriptionSubPage,
}

const MedicalRecordPage = () => {
  const [subPage, setSubPage] = useState<ISubPages>("description")

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
            title: "Descrição Cirúrgica",
            targetPage: "description",
          },
          {
            icon: <Icons.Paper />,
            title: "Avaliação Pré-Anestésica",
            targetPage: "pre",
          },
          {
            icon: <Icons.Paper />,
            title: "Ficha Anestesia",
            targetPage: "anesthesia",
          },
          {
            icon: <Icons.Paper />,
            title: "Recuperação Anestesia",
            targetPage: "recover",
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

export default MedicalRecordPage
