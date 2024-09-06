import * as C from "../styles"
import * as S from "./styles"

import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import NewSubPage from "./SubPages/New"

import Tabs from "../../../components/Tabs"
import SideControl from "../../../components/SideControl"

// Relations
export type ISubPages = "new" | "list"

const pagesRelations = {
  new: NewSubPage,
  list: NewSubPage,
}

const OutpatientPage = () => {
  const [subPage, setSubPage] = useState<ISubPages>("new")

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
            title: "Adicionar Novo",
            targetPage: "new",
          },
          {
            icon: <Icons.Paper />,
            title: "Lista Cadastro",
            targetPage: "list",
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
