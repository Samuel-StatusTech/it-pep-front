import { Icons } from "../../assets/icons/_index"
import * as S from "./styled"

type Props = any

const PatientBox = (props: Props) => {
  return (
    <S.Component>
      <S.UserInfo>
        <S.UserProfile>
          <Icons.User />
        </S.UserProfile>
        <S.Info>
          <S.InfoName>Moacir Alves de Oliveira</S.InfoName>
          <S.InfoValue>59 anos</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.InfoName>Número do celular</S.InfoName>
          <S.InfoValue>(81) 99962-3369</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.InfoName>Número do cartão</S.InfoName>
          <S.InfoValue>12345678</S.InfoValue>
        </S.Info>
        <S.Info>
          <S.InfoName>Local</S.InfoName>
          <S.InfoValue>Pronto Atendimento Adulto</S.InfoValue>
        </S.Info>
      </S.UserInfo>
      <S.Button>
        <Icons.Horn />
      </S.Button>
    </S.Component>
  )
}

export default PatientBox
