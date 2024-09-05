import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const Checkbox = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blue.soft};
  color: ${({ theme }) => theme.colors.blue.soft};
  border-radius: 2px;
  width: 16px;
  height: 16px;

  svg {
    width: 12px;
    height: 14px;
  }
`
