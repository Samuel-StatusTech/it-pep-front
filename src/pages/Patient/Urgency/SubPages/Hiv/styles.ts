import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

export const SPHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const SPTitle = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue.soft};
`

export const SPSubTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue.medium};
`

export const DatesArea = styled.div`
  display: flex;
  gap: 56px;
`

export const DataGroup = styled.div<{ $fullsize?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ $fullsize }) => ($fullsize ? "100%" : "240px")};
  flex: ${({ $fullsize }) => ($fullsize ? 1 : "unset")};
`

export const DGTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blue.soft};
`

export const DGInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SearchArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.bluewhite};
  flex: 1;
  padding: 8px 24px;
  border-radius: 36px;
`

export const Input = styled.input`
  flex: 1;
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

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue.soft};
  color: ${({ theme }) => theme.colors.neutral.white};
`
