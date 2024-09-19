import * as C from "../styles"
import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"

import AskSubPage from "./SubPages/Ask"
import CardiacSubPage from "./SubPages/Cardiac"

import Tabs from "../../../components/Tabs"
import SideControl from "../../../components/SideControl"

// Relations
export type ISubPages = "ask" | "cardiac" | "pediatric" | "neurologic"

const pagesRelations = {
  ask: AskSubPage,
  cardiac: CardiacSubPage,
  pediatric: AskSubPage,
  neurologic: AskSubPage,
}

const OpinionPage = () => {
  const [subPage, setSubPage] = useState<ISubPages>("ask")

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
            title: "Solicitar parecer",
            targetPage: "ask",
          },
          {
            icon: <Icons.Paper />,
            title: "Parecer Cardiologia",
            targetPage: "cardiac",
          },
          {
            icon: <Icons.Paper />,
            title: "Parecer Pediatria",
            targetPage: "pediatric",
          },
          {
            icon: <Icons.Paper />,
            title: "Parecer Neurologia",
            targetPage: "neurologic",
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

export default OpinionPage
