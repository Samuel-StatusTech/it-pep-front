import { DatePicker } from "@mui/x-date-pickers"
import { Icons } from "../../../../assets/icons/_index"
import { formatDate } from "../../../../utils/formatters/date"
import * as S from "./styles"
import { useRef, useState } from "react"

type Props = {
  value: Date
  onChange: (val: any) => void
  necessary?: boolean
  placeholder?: string
  size?: number
  gridSize?: number
}

const BasicDateField = ({ value, onChange, size, gridSize }: Props) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  const [showingPicker, setShowingPicker] = useState(false)

  const togglePicker = () => setShowingPicker(!showingPicker)

  const handleChange = (val: any) => {
    onChange(val)
  }

  return (
    <S.Area $size={size} $gridSize={gridSize} onClick={togglePicker}>
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
