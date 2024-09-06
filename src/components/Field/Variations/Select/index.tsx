import { useRef, useState } from "react"
import * as C from "../../styles"
import * as S from "./styles"

import { Icons } from "../../../../assets/icons/_index"

type Props = {
  label?: string
  necessary?: boolean
  placeholder?: string
  options: { key: string; name: string }[]
  value: string
  onChange: (val: any) => void
  size?: number
  gridSize?: number
}

const MultipleField = (props: Props) => {
  const {
    label,
    necessary,
    placeholder,
    options,
    value,
    onChange,
    size,
    gridSize,
  } = props

  const selectRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)

  const toggleDropdown = () => setOpened(!opened)

  const handleClick = (opt: { key: string; name: string }) => {
    onChange(opt.key)
    toggleDropdown()
  }

  return (
    <S.Area $size={size} $gridSize={gridSize}>
      <S.Select ref={selectRef}>
        {label && (
          <C.Label>
            <span>{label}</span>
            {necessary && <span> *</span>}
          </C.Label>
        )}
        <S.SelectMain onClick={toggleDropdown}>
          <span>
            {value
              ? options.find((opt) => opt.key === value)?.name
              : placeholder ?? "Selecione"}
          </span>
          <Icons.Arrow className={opened ? "turned" : ""} />
        </S.SelectMain>
        <S.Dropdown $showing={opened}>
          <S.DropdownListArea>
            <S.OptionsList>
              {options.map((opt, k) => (
                <S.Option key={k} onClick={() => handleClick(opt)}>
                  <span>{opt.name}</span>
                </S.Option>
              ))}
            </S.OptionsList>
          </S.DropdownListArea>
        </S.Dropdown>
      </S.Select>
    </S.Area>
  )
}

export default MultipleField
