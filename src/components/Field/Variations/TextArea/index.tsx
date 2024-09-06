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

const TextAreaField = ({
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
      <S.TextArea
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeholder ?? "Escreva aqui"}
        rows={5}
      />
    </C.Area>
  )
}

export default TextAreaField
