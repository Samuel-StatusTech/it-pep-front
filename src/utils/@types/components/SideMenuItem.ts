type TItem = {
  text: string
  link: string
  tag: string
}

export type PSideMenuItem = TItem & {
  icon: string
  subtabs?: TItem[]
}
