import styled from "styled-components"

export const Area = styled.div<{ $size?: number; $gridSize?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  flex: ${({ $size }) => $size ?? 1};
  ${({ $gridSize }) => ($gridSize ? `grid-column: span ${$gridSize}` : "")};
  gap: 24px;
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.black};
`

export const Input = styled.input`
  outline: none;
  font-size: 16px;
  flex: 1;
  min-width: unset;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.blue.soft};
  border-radius: 8px;
  padding: 8px 12px;
`
