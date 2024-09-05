import * as C from "../../styles"
import * as S from "./styles"

type Props = {
  label: string
  value: string
  onChange: (val: any) => void
  necessary?: boolean
  placeholder?: string
}

const InputField = ({
  label,
  necessary,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <C.Area>
      <C.Label>
        <span>{label}</span>
        {necessary && <span> *</span>}
      </C.Label>
      <S.Input
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeholder}
      />
    </C.Area>
  )
}

export default InputField
