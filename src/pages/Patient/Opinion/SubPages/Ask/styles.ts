import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 16px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

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
