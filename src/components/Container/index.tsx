import * as S from "./styled"

type Props = {
  children?: JSX.Element | JSX.Element[]
  fullHeight?: boolean
  dashboard?: boolean
  styles?: any
}

const Container = ({ children, fullHeight, dashboard, styles }: Props) => {
  return (
    <S.Component $fullHeight={fullHeight} $dashboard={dashboard} style={styles}>
      {children}
    </S.Component>
  )
}

export default Container
