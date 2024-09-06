import * as S from "./styles"

import { infoList } from "./infolist"
import { Icons } from "../../../../../assets/icons/_index"

const ExaminationInternalSubPage = () => {
  return (
    <S.Subpage>
      <S.SubpageTitle>Prescrição Padrão</S.SubpageTitle>

      <S.SearchArea>
        <Icons.Search />
        <S.Input placeholder="Pesquisa" />
      </S.SearchArea>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>000000 - CHARLES HENRRIQUE DO NASCIMENTO LIMA</span>
          </S.FormBlockTitle>
          <S.InfoList>
            {infoList.map((i, k) => (
              <S.Info key={k}>
                {i.stared ? <Icons.StarFilled /> : <Icons.StarEmpty />}
                <S.InfoName>{i.name}</S.InfoName>
                <S.Laboratory>{i.laboratory}</S.Laboratory>
              </S.Info>
            ))}
          </S.InfoList>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>000000 - HENRRIQUE CHARLES DA LIMA NASCIMENTO</span>
          </S.FormBlockTitle>
          <S.InfoList>
            {infoList.map((i, k) => (
              <S.Info key={k}>
                {i.stared ? <Icons.StarFilled /> : <Icons.StarEmpty />}
                <S.InfoName>{i.name}</S.InfoName>
                <S.Laboratory>{i.laboratory}</S.Laboratory>
              </S.Info>
            ))}
          </S.InfoList>
        </S.FormBlock>
      </S.FormLine>
    </S.Subpage>
  )
}

export default ExaminationInternalSubPage
