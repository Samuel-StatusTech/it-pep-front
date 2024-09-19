import * as S from "./styles"
import { Icons } from "../../../../assets/icons/_index"

type Props = {
  label?: string
  options: { key: string; name: string }[]
  value: string
  onChange: (val: any) => void
}

const MultipleField = ({ label, options, value, onChange }: Props) => {
  const handleClick = (opt: { key: string; name: string }) => {
    onChange(opt.key)
  }

  return (
    <S.Area>
      {label && <S.Label>{label}</S.Label>}
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
