import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding: 24px;
  border-radius: 8px;
  gap: 16px;
`

export const SubpageTitle = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue.soft};
`

// Form

export const FormLine = styled.div`
  display: flex;
`

export const FormBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const FormBlockFields = styled.div`
  flex: 1;
  display: flex;
  padding: 8px 0;
`

export const FormBlockTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 24px;
  background-color: ${({ theme }) => theme.colors.backgrounds.cardSecondary};

  span {
    font-size: 14px;
    font-weight: 600;
    color: #666666;
  }
`

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
`

export const InfoName = styled.span`
  margin-left: 28px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.black};
`

export const Laboratory = styled.span`
  font-size: 14px;
  color: #8f9396;
  font-style: italic;
`
