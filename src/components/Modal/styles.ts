import styled from "styled-components"

export const Element = styled.div`
  border-radius: 4px;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 0 6px 50px rgba(0, 0, 0, 0.18);
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    min-width: unset;
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: -28px;
`

export const HeaderDefault = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`

export const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 7px;
  display: grid;
  place-items: center;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.blue.dark};
  padding: 24px 60px 42px;
`

export const Description = styled.div`
  font-weight: 700;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    max-width: 180px;
  }
`

export const Button = styled.button`
  font-weight: 500;
  padding: 8px 32px;
  border: 1px solid ${({ theme }) => theme.colors.blue.dark};
  border-radius: 4px;
  background: none;
`
