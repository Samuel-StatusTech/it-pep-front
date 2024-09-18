import { pad } from "./pad"

type TDate = string | number | Date
type TFormat = "ddmmyyyy" | "HhMm"

export const formatDate = (date: TDate, format: TFormat) => {
  let fn: (d: TDate) => string = () => ""

  switch (format) {
    case "ddmmyyyy":
      fn = FD_ddmmYYYY
      break
    case "HhMm":
      fn = FD_HhMm
      break
    default:
      break
  }

  return fn(date)
}

const FD_ddmmYYYY = (date: TDate) => {
  const d = new Date(date)

  let str = ""

  str = pad(d.getDate(), 2, 0)
  str += `/${pad(d.getMonth() + 1, 2, 0)}`
  str += `/${d.getFullYear()}`

  return str
}

const FD_HhMm = (date: TDate) => {
  const d = new Date(date)

  let str = ""

  str = `${pad(d.getHours(), 2, 0)}h`
  str += `${pad(d.getMinutes(), 2, 0)}m`

  return str
}
