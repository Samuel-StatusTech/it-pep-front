import * as S from "./styles"
import { PSideMenuItem } from "../../utils/@types/components/SideMenuItem"
import { Link } from "react-router-dom"
import { Icons } from "../../assets/icons/_index"

type Props = {
  data: PSideMenuItem
  active: boolean
  k: number
  action: () => void
}

const iconRef: { [key: string]: JSX.Element } = {
  care: <Icons.Care />,
  outpatient: <Icons.Outpatient />,
  files: <Icons.Files />,
  urgency: <Icons.Urgency />,
  bed: <Icons.Bed />,
  stethoscope: <Icons.Stethoscope />,
  medicalRecord: <Icons.MedicalRecord />,
  documents: <Icons.Documents />,
}

const SideMenuItem = ({ data, active, k, action }: Props) => {

  const renderIcon = () => {
    const icon = iconRef[data.icon]

    return icon ?? null
  }

  return (
    <S.Wrapper $active={active} $k={k}>
      <Link to={`${data.link}`} onClick={action}>
        {renderIcon()}
        <S.Title>{data.text}</S.Title>
      </Link>
    </S.Wrapper>
  )
}

export default SideMenuItem
