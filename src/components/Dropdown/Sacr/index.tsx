import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import * as S from "./styles"

type Props = {
  title: string
  data: {
    info: string
    value?: string
  }[]
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
            {data.map((i, k) => (
              <S.Info>
                <span>{i.info}</span>
                {i.value ? <span>{` - ${i.value}`}</span> : null}
              </S.Info>
            ))}
          </S.BoxContent>
        </S.BoxWrapper>
      </S.Box>
    </S.Area>
  )
}

export default SacrDropdown
