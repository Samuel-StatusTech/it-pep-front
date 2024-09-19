import * as S from "./styles"

type Props = {
  label?: string
  value: string
  onChange?: (val: any) => void
  necessary?: boolean
  placeholder?: string
  size?: number
  gridSize?: number
  width?: string
}

const BasicField = ({
  label,
  necessary,
  placeholder,
  value,
  onChange,
  size,
  gridSize,
  width,
}: Props) => {
  return (
    <S.Area $size={size} $gridSize={gridSize} $width={width}>
      {label && (
        <S.Label>
          <span>{label}</span>
        </S.Label>
      )}
      <S.Input
        value={value}
        onChange={(ev) => onChange && onChange(ev.target.value)}
        placeholder={placeholder}
      />
    </S.Area>
  )
}

export default BasicField
