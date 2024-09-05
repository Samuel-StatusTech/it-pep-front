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

export const Content = styled.div`
  flex: 1;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  padding: 16px;
`

export const Principal = styled.div`
  flex: 1;
  min-width: 100%;
  display: flex;
  gap: 8px;
  align-items: flex-start;
`
