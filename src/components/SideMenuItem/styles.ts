import styled from "styled-components"

export const Wrapper = styled.div<{ $active: boolean; $k: number }>`
  a {
    display: flex;
    align-items: center;
    gap: 32px;
    width: 100%;
    padding: 8px 24px 8px 16px;
    text-decoration: none;
    background-color: ${({ $active, theme }) =>
      $active
        ? theme.colors.backgrounds.dashboardMain
        : theme.colors.blue.dark};
    color: ${({ $active, theme }) =>
      $active
        ? theme.colors.blue.soft
        : theme.colors.backgrounds.dashboardMain};
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

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
    theme.animations.types.fadeLeft +
    theme.animations.durations.main +
    theme.animations.delays.main($k * 0.6)}
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`
