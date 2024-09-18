import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

export const SubpageHead = styled.div`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 60px;

  span {
    color: rgba(0, 0, 0, 0.72);
    font-size: 16px;
  }

  span.title {
    color: ${({ theme }) => theme.colors.neutral.black};
    font-weight: 600;
  }

  span:nth-child(2) {
    font-weight: 400;
  }

  span:nth-child(3) {
    font-weight: 500;
  }
`

export const FormLine = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

export const FormBlock = styled.div<{ $cols?: number }>`
  grid-column: span ${({ $cols }) => $cols ?? 2};
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
    white-space: nowrap;
    padding: 0 30px;
  }
`

export const FormBlockFields = styled.div`
  flex: 1;
  display: flex;
  padding: 24px 0 24px 24px;
  margin-left: 30px;
`

export const UrgencyIndicator = styled.div<{ $color: string }>`
  margin-left: 24px;
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

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
