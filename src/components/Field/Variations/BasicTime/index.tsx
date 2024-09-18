import { TimePicker } from "@mui/x-date-pickers"
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

const BasicTimeField = ({ value, onChange, size, gridSize }: Props) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  const [showingPicker, setShowingPicker] = useState(false)

  const togglePicker = () => setShowingPicker(!showingPicker)

  const handleChange = (val: any) => {
    console.log(val)
    onChange(val)
    togglePicker()
  }

  return (
    <S.Area $size={size} $gridSize={gridSize}>
      <span>{formatDate(value, "HhMm")}</span>
      <Icons.Clock onClick={togglePicker} />

      <div
        style={{
          width: 0,
          overflow: "hidden",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <TimePicker
          ref={pickerRef}
          open={showingPicker}
          onAccept={handleChange}
        />
      </div>
    </S.Area>
  )
}

export default BasicTimeField
