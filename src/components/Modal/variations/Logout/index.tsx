import * as C from "../../styles"

import { Icons } from "../../../../assets/icons/_index"

type Props = {
  data?: any
  onClose: () => void
}

const Logout = ({ onClose }: Props) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <C.Element>
      <C.Header>
        <C.HeaderDefault>
          <C.HeaderMain>
            <div />
            <C.CloseBtn onClick={handleClose}>
              <Icons.Close />
            </C.CloseBtn>
          </C.HeaderMain>
        </C.HeaderDefault>
      </C.Header>
      <C.Content>
        <Icons.Error />
        <C.Description>Tem certeza que deseja sair?</C.Description>
        <C.Button onClick={onClose}>Sair</C.Button>
      </C.Content>
    </C.Element>
  )
}

export default Logout
