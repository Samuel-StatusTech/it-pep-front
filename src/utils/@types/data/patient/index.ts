export type TPatient = {
  id: string
  origin: string
  urgency: number
  protocol: number
  callNumber: number
  code: number
  name: string
  socialName: string
  age: number
  status: number
  plan: string
  arrive: string
  procedure: string
  bed: string
  speciality: string
  cid: string
  sector: string
}

export const urgencyRelation: any = {
  1: "red",
  2: "yellow",
  3: "green",
  4: "blue",
}
