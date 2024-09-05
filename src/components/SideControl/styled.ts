import styled from "styled-components"

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.blue.soft};
  padding: 8px 6px;
  border-radius: 16px;

  &:nth-child(1) {
    button:nth-child(1) {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral.white};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
