import styled from "styled-components"

export const Component = styled.div<{
  $fullHeight?: boolean
  $dashboard?: boolean
}>`
  width: 100%;
  /* max-width: ${({ $dashboard }) => ($dashboard ? 1180 : 1360)}px; */
  max-width: 1360px;
  margin: auto;
  flex: ${({ $fullHeight }) => ($fullHeight ? 1 : "unset")};

  @media (max-width: 1366px) {
    max-width: calc(100% - (2 * 64px));
  }

  @media (max-width: 920px) {
    max-width: calc(100% - (2 * 48px));
  }

  @media (max-width: 520px) {
    max-width: calc(100% - (2 * 24px));
  }
`
