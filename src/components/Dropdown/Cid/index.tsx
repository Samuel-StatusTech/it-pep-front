import { useState } from "react"
import * as S from "./styles"

import { Icons } from "../../../assets/icons/_index"

type TLine = JSX.Element[]

type Props = {
  title: string
  data: TLine[]
}

const SacrDropdown = ({ title, data }: Props) => {
  const [opened, setOpened] = useState(false)

  return (
    <S.Area>
      <S.Main $opened={opened} onClick={() => setOpened(!opened)}>
        <Icons.IndicatorCircle />
        <span>{title}</span>
      </S.Main>
      <S.Box $visible={opened}>
        <S.BoxWrapper>
          <S.BoxContent>
            {data.map((line, k) => (
              <S.Line key={k}>{line}</S.Line>
            ))}
          </S.BoxContent>
        </S.BoxWrapper>
      </S.Box>
    </S.Area>
  )
}

export default SacrDropdown
