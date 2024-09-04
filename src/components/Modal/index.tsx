import UnfilledFields from "./variations/UnfilledFields"
import Logout from "./variations/Logout"

import { Dialog } from "@mui/material"

type Props = {
  role: TModals
  visible: boolean
  onClose: () => void
  handleOp?: (op: string) => void
  children?: JSX.Element | JSX.Element[]
  data?: any
}

type TModals = "unfilledFields" | "logout"

const Modal = (props: Props) => {
  const { visible, onClose } = props

  const renderModalContent = ({ onClose }: any) => {
    let el: any = null

    switch (props.role) {
      case "unfilledFields":
        el = <UnfilledFields data={props.data} onClose={onClose} />
        break
      case "logout":
        el = <Logout data={props.data} onClose={onClose} />
        break
      default:
        break
    }

    return el
  }

  return <Dialog open={visible}>{renderModalContent({ onClose })}</Dialog>
}

export default Modal
