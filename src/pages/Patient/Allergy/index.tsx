import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import ListSubPage from "./SubPages/List"
import ClassificationSubPage from "./SubPages/Classification"

type TTabsProps = {
  list: {
    icon: JSX.Element
    title: string
    targetPage: any
  }[]
  action: (page: "list" | "classification") => void
  actualPage: string
}

const Tabs = ({ list, action, actualPage }: TTabsProps) => {
  return (
    <S.CardsTabsArea>
      {list.map((t, k) => (
        <S.CardTab
          key={k}
          onClick={() => action(t.targetPage)}
          className={actualPage === t.targetPage ? "active" : ""}
        >
          {t.icon}
          <S.Title>{t.title}</S.Title>
        </S.CardTab>
      ))}
    </S.CardsTabsArea>
  )
}

// Relations
const pagesRelations = {
  list: ListSubPage,
  classification: ClassificationSubPage,
}

const AllergyPage = () => {
  const [subPage, setSubPage] = useState<"list" | "classification">("list")

  const handleClick = (page: "list" | "classification") => {
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
            title: "Alergia Paciente",
            targetPage: "list",
          },
          {
            icon: <Icons.Paper />,
            title: "Classificação CCIH",
            targetPage: "classification",
          },
        ]}
        action={handleClick}
        actualPage={subPage}
      />

      {renderSubPage()}
    </S.Content>
  )
}

export default AllergyPage
