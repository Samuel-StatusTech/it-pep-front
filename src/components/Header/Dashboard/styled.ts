import styled from "styled-components"

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding: 24px 32px;
`

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
`

export const PageTitle = styled.h1`
  font: 32px 600;
  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    display: none;
  }
`

export const BreadArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.blue.light};

  a,
  span {
    color: currentColor;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: -4px;
  }

  span:nth-last-child(1) {
    color: ${({ theme }) => theme.colors.blue.dark};
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`

export const SearchArea = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.bluewhite};
  flex: 1;
  padding: 8px 24px;
  border-radius: 36px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 4px;
  min-width: unset;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue.light};
    font-weight: 300;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 100%;
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
