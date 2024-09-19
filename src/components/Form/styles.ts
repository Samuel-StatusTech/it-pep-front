import styled from "styled-components"

export const FormLine = styled.div`
  display: flex;
`

export const FormBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const FormBlockTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 24px;
  background-color: ${({ theme }) => theme.colors.backgrounds.cardSecondary};

  span {
    font-size: 14px;
    font-weight: 600;
    color: #666666;
  }
`

export const FBLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px;
`

export const FormBlockFields = styled.div<{ $columns?: number }>`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(${({ $columns }) => $columns ?? 12}, 1fr);
  align-items: stretch;
  gap: 16px;
  flex: 12;
`
