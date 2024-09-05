import styled from "styled-components"

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.dark};
  min-height: 100vh;
  padding: 16px;
  display: flex;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgrounds.dashboardMain};
  border-radius: 32px;
  overflow: hidden;
`
