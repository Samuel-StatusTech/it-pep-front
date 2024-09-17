import { patientsTableConfig } from "./patients"

export const tableConfig = {
  patients: patientsTableConfig,
}

export type TTableConfig<T = any> = {
  columns: {
    name: string
    field: string
    align?: "left" | "center" | "right"
  }[]
  specialFields?: { [key: string]: (item: T) => any }
  component: (data: T) => JSX.Element
}
