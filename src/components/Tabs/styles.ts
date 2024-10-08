import styled from "styled-components"

export const CardsTabsArea = styled.div`
  max-width: 100%;
  overflow: hidden;
`

export const TabsContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
`

export const CardTab = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgrounds.cardInactive};
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.blue.medium};
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.blue.soft};
  }
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`
