import * as S from "./styles"

import { infoList } from "./infolist"
import { Icons } from "../../../../../../assets/icons/_index"

import Form from "../../../../../../components/Form"

const PrescriptionSubPage = () => {
  return (
    <S.Subpage>
      <S.SearchArea>
        <Icons.Search />
        <S.Input placeholder="Pesquise por uma prescrição" />
      </S.SearchArea>

      <Form
        lines={infoList.map((i, k) => ({
          blocks: [
            {
              title: i.title,
              fieldLines: [
                {
                  fields: [
                    <S.InfoList>
                      {i.list.map((item, itemkey) => (
                        <S.Info key={itemkey}>
                          {item.stared ? (
                            <Icons.StarFilled />
                          ) : (
                            <Icons.StarEmpty />
                          )}
                          <S.InfoName>{item.name}</S.InfoName>
                          <S.InfoObs>{item.obs}</S.InfoObs>
                        </S.Info>
                      ))}
                    </S.InfoList>,
                  ],
                },
              ],
            },
          ],
        }))}
      />
    </S.Subpage>
  )
}

export default PrescriptionSubPage
