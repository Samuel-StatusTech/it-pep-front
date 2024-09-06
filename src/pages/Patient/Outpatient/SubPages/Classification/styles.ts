import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

// Form

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span,
  svg {
    display: inline-block;
  }

  svg path {
    fill: #1f60aa;
  }
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
