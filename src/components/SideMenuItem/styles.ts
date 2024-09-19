import styled from "styled-components"

export const Wrapper = styled.div<{ $active?: boolean; $k: number }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.backgrounds.dashboardMain : theme.colors.blue.dark};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue.soft : theme.colors.backgrounds.dashboardMain};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  a {
    color: currentColor;
    display: flex;
    align-items: center;
    gap: 32px;
    width: 100%;
    padding: 8px 24px 8px 16px;
    text-decoration: none;
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;
    overflow: hidden;

    svg {
      width: 48px;
      height: 48px;
    }

    span {
      color: currentColor;
      font: 16px 500;
      width: 120px;
    }
  }

  opacity: 0;
  ${({ $k, theme }) =>
    theme.animations.types.fade +
    theme.animations.durations.main +
    theme.animations.delays.main($k * 0.6)}
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgrounds.cardInactive};
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.blue.medium};
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.blue.soft};
  }
`

export const DropdownWrapper = styled.div<{ $showing: boolean }>`
  width: 100%;
  display: grid;
  grid-template-rows: ${({ $showing }) => ($showing ? 1 : 0)}fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s;
`

export const DropdownContainer = styled.div`
  min-height: 0;
`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 16px;
`

export const SubCardTab = styled.div<{ $active: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.backgrounds.dashboardMain : theme.colors.blue.dark};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue.soft : theme.colors.backgrounds.dashboardMain};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  a {
    color: currentColor;
    display: flex;
    align-items: center;
    gap: 32px;
    width: 100%;
    padding: 8px 24px 8px 16px;
    text-decoration: none;
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;

    span {
      color: currentColor;
      font: 16px 500;
      width: 120px;
    }
  }
`
