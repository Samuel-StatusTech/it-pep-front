import { Icons } from "../../assets/icons/_index"
import * as S from "./styled"

type Props = {
  add?: (p?: any) => void
  copy?: (p?: any) => void
  save?: (p?: any) => void
  print?: (p?: any) => void
  delete?: (p?: any) => void
  history?: (p?: any) => void
}

const SideControl = (props: Props) => {
  return (
    <S.Component>
      <S.Area>
        <S.Button onClick={props.add}>
          <Icons.Plus />
        </S.Button>
        <S.Button onClick={props.copy}>
          <Icons.Copy />
        </S.Button>
        <S.Button onClick={props.save}>
          <Icons.Save />
        </S.Button>
        <S.Button onClick={props.print}>
          <Icons.Print />
        </S.Button>
        <S.Button onClick={props.delete}>
          <Icons.Delete />
        </S.Button>
      </S.Area>
      <S.Area>
        <S.Button onClick={props.history}>
          <Icons.Delete />
        </S.Button>
      </S.Area>
    </S.Component>
  )
}

export default SideControl
