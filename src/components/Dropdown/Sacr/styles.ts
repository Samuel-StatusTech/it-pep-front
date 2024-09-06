import styled from "styled-components"

export const Area = styled.div``

export const Main = styled.div<{ $opened: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    transform: rotate(${({ $opened }) => ($opened ? 0 : 180)}deg);
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
  }
`

export const Box = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-rows: ${({ $visible }) => ($visible ? 1 : 0)}fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s;
`

export const BoxWrapper = styled.div`
  min-height: 0;
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 8px 32px 16px;
`

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Info = styled.div`
  margin-left: 32px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.black};
`
