import * as S from "./styled"

type Props = {
  children?: JSX.Element | JSX.Element[]
  fullHeight?: boolean
  dashboard?: boolean
}

const Container = ({ children, fullHeight, dashboard }: Props) => {
  return <S.Component $fullHeight={fullHeight} $dashboard={dashboard}>{children}</S.Component>
}

export default Container
