import styled from "styled-components"

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.page};
  min-height: 100vh;
`

export const Main = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const TableControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
    gap: 24px;
  }
`

export const DataFrom = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue.light};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const DataOrigin = styled.div<{ $active: boolean }>`
  font-weight: 600;
  font-size: 20px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue.soft : theme.colors.blue.light};
  transition: color 0.2s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    font-size: 18px;
  }
`

export const Indicator = styled.div<{ $width: number; $left: number }>`
  background-color: ${({ theme }) => theme.colors.blue.soft};
  height: 4px;
  position: absolute;
  top: 100%;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  transform: translateY(-25%);
  border-radius: 4px;
  transition: left 0.3s, width 0.3s;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 50px;
  }
`

export const DataFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const TagFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TagFilter = styled.div<{ $active: boolean }>`
  display: flex;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.blue.soft};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.blue.soft : "transparent"};
  padding: 4px 8px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.neutral.white : theme.colors.blue.soft};
`

export const SearchArea = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
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

export const TableArea = styled.div``

export const UrgencyIndicator = styled.div<{ $color: string }>`
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${({ $color, theme }) =>
    $color === "red"
      ? theme.colors.red.system
      : $color === "yellow"
      ? theme.colors.yellow.system
      : $color === "green"
      ? theme.colors.green.system
      : $color === "blue"
      ? theme.colors.blue.soft
      : "transparent"};
`
