import * as S from "./styles"
import { PSideMenuItem } from "../../utils/@types/components/SideMenuItem"
import { Link } from "react-router-dom"
import { Icons } from "../../assets/icons/_index"
import { useState } from "react"

type Props = {
  data: PSideMenuItem
  active: boolean
  page?: string
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

const SideMenuItem = ({ data, active, page, k, action }: Props) => {
  const [showingDropdown, setShowingDropdown] = useState(true)

  const renderIcon = () => {
    const icon = iconRef[data.icon]

    return icon ?? null
  }

  const handleClick = (e: any) => {
    if (data.subtabs) {
      e.preventDefault()
      if (page && !data.subtabs.some((st) => page === st.tag))
        setShowingDropdown(!showingDropdown)
    } else action()
  }

  return (
    <S.Wrapper $active={!data.subtabs ? active : false} $k={k}>
      <Link to={`${data.link}`} onClick={handleClick}>
        {renderIcon()}
        <S.Title>{data.text}</S.Title>
      </Link>
      {data.subtabs && (
        <S.DropdownWrapper $showing={showingDropdown}>
          <S.DropdownContainer>
            <S.DropdownContent>
              {data.subtabs.map((st, stk) => (
                <S.SubCardTab key={stk} $active={page === st.tag}>
                  <Link to={`${st.link}`} onClick={action}>
                    <S.Title>{st.text}</S.Title>
                  </Link>
                </S.SubCardTab>
              ))}
            </S.DropdownContent>
          </S.DropdownContainer>
        </S.DropdownWrapper>
      )}
    </S.Wrapper>
  )
}

export default SideMenuItem
