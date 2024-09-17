import styled from "styled-components"

export const Subpage = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`
