import { TUserControls, TSet } from "../../utils/@types/store"

const userControls = (set: TSet): TUserControls => {
  return {
    setData: (data: any) => {
      set((store: any) => ({ ...store, user: data }))
    },
    clear: () => {
      set((store: any) => ({ ...store, user: null }))
    },
  }
}

export default userControls
