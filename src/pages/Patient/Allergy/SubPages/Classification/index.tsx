import * as S from "./styles"

import { Icons } from "../../../../../assets/icons/_index"

const ClassificationSubPage = () => {
  return (
    <S.Subpage>
      <Icons.PageInfo />
      <S.Text>
        <span>
          Paciente <strong>não possui histórico</strong> neste tema
        </span>
      </S.Text>
      <S.Text>
        <span>
          <strong>Pressione</strong> o botão
        </span>
        <Icons.Plus />
        <span>
          a direita para <strong>criar um novo registro</strong>
        </span>
      </S.Text>
    </S.Subpage>
  )
}

export default ClassificationSubPage
