import * as S from "./styles"
import { Icons } from "../../../../assets/icons/_index"

type Props = {
  options: { key: string; name: string }[]
  value: string
  onChange: (val: any) => void
}

const MultipleField = ({ options, value, onChange }: Props) => {
  const handleClick = (opt: { key: string; name: string }) => {
    onChange(opt.key)
  }

  return (
    <S.Area>
      {options.map((o, k) => (
        <S.Option key={k} onClick={() => handleClick(o)}>
          <S.Checkbox>{value === o.key && <Icons.Check />}</S.Checkbox>
          <span>{o.name}</span>
        </S.Option>
      ))}
    </S.Area>
  )
}

export default MultipleField
