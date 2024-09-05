import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

export const SubpageTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue.dark};
  font-weight: 500;
  font-size: 18px;
  padding: 16px;
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

export const FormBlockFields = styled.div`
  flex: 1;
  display: flex;
  padding: 24px;
`
