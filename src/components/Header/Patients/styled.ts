import styled from "styled-components"

export const Component = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.blue.dark};
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
`

export const PageTitle = styled.h1`
  font: 32px 600;
  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    display: none;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.neutral.bluewhite};
  display: grid;
  place-items: center;
  cursor: pointer;
`
