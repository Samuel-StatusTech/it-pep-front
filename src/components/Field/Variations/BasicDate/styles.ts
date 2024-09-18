import styled from "styled-components"

export const Area = styled.div<{ $size?: number; $gridSize?: number }>`
  flex: ${({ $size }) => $size ?? 1};
  ${({ $gridSize }) => ($gridSize ? `grid-column: span ${$gridSize}` : "")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue.soft};
  padding: 6px 12px;
  width: ${({ $size, $gridSize }) => (!$size && !$gridSize ? "100%" : "unset")};

  & > span {
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutral.black};
  }

  & > svg {
    cursor: pointer;
  }
`

export const Label = styled.label``

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
