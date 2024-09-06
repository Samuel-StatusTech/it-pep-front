import * as C from "../../styles"
import * as S from "./styles"

type Props = {
  label: string
  value: string
  onChange: (val: any) => void
  necessary?: boolean
  placeholder?: string
  size?: number
  gridSize?: number
}

const InputField = ({
  label,
  necessary,
  placeholder,
  value,
  onChange,
  size,
  gridSize,
}: Props) => {
  return (
    <C.Area $size={size} $gridSize={gridSize}>
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
