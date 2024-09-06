import styled from "styled-components"

export const Area = styled.div<{ $size?: number; $gridSize?: number }>`
  display: flex;
  flex: ${({ $size }) => $size ?? 1};
  ${({ $gridSize }) => ($gridSize ? `grid-column: span ${$gridSize}` : "")};
  height: 100%;
`

// Dropdown
export const Select = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
`

export const SelectMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue.soft};
  color: ${({ theme }) => theme.colors.blue.soft};
  padding: 12px 16px;
  cursor: pointer;
  height: 100%;

  span {
    line-height: 24px;
  }

  svg {
    width: 16px;
    height: 16px;
    transform: rotate(0deg);
    transition: transform 0.2s;

    &.turned {
      transform: rotate(180deg);
    }
  }
`

export const Dropdown = styled.div<{ $showing: boolean }>`
  position: absolute;
  display: ${({ $showing }) => ($showing ? "flex" : "none")};
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue.soft};
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding-left: 12px;
  width: 100%;
  z-index: 3;
`

export const DropdownSearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 4px 0;
`

export const DropdownInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  padding: 8px 4px;
  font-size: 16px;
  line-height: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue.soft};
    font-weight: 300;
  }
`

export const DropdownListArea = styled.div`
  max-height: 360px;
  overflow: auto;
`

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  padding: 4px 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.bluegrey};
    cursor: pointer;
  }
`
