import { useRef, useState } from "react"
import * as S from "./styles"
import { DatePicker } from "@mui/x-date-pickers"
import { Icons } from "../../../../assets/icons/_index"
import { formatDate } from "../../../../utils/formatters/date"

type Props = {
  label: string
  value: Date
  onChange: (val: any) => void
  necessary?: boolean
  placeholder?: string
  size?: number
  gridSize?: number
}

const BasicDateField = ({
  label,
  value,
  onChange,
  necessary,
  size,
  gridSize,
}: Props) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  const [showingPicker, setShowingPicker] = useState(false)

  const togglePicker = () => setShowingPicker(!showingPicker)

  const handleChange = (val: any) => {
    onChange(val)
  }

  return (
    <S.Area $size={size} $gridSize={gridSize} onClick={togglePicker}>
      <S.Label>
        <span>{label}</span>
        {necessary && <span> *</span>}
      </S.Label>
      <span>{formatDate(value, "ddmmyyyy")}</span>
      <Icons.Calendar />

      <div
        style={{
          width: 0,
          overflow: "hidden",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <DatePicker
          ref={pickerRef}
          onChange={handleChange}
          open={showingPicker}
        />
      </div>
    </S.Area>
  )
}

export default BasicDateField
