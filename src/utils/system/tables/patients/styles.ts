import styled from "styled-components"

export const UrgencyIndicator = styled.div<{ $color: string }>`
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${({ $color, theme }) =>
    $color === "red"
      ? theme.colors.red.system
      : $color === "yellow"
      ? theme.colors.yellow.system
      : $color === "green"
      ? theme.colors.green.system
      : $color === "blue"
      ? theme.colors.blue.soft
      : "transparent"};
`
