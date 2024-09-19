import styled from "styled-components"

export const Area = styled.div<{
  $size?: number
  $gridSize?: number
  $width?: string
}>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.blue.soft};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex: ${({ $size }) => $size ?? 1};
  ${({ $gridSize }) => ($gridSize ? `grid-column: span ${$gridSize}` : "")};
  ${({ $width }) => ($width ? `width: ${$width}` : "")};
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding: 4px;
  z-index: 2;

  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue.soft};

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.red.system};
  }
`
