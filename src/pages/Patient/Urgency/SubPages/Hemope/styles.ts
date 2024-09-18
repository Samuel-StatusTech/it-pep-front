import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

export const SubpageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  margin: 16px 24px;
  padding-bottom: 36px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.black};

  & > svg {
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.blue.soft};
    }
  }
`

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    color: ${({ theme }) => theme.colors.blue.dark};
    font-weight: 700;
    font-size: 24px;
  }
`

export const SubpageTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue.dark};
  font-weight: 700;
  font-size: 24px;
  margin: auto;
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 24px;
  gap: 36px;
`
