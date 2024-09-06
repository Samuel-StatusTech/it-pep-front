import * as S from "./styles"

type TTabsProps = {
  list: {
    icon: JSX.Element
    title: string
    targetPage: any
  }[]
  action: (page: any) => void
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

export default Tabs
