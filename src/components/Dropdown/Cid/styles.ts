import styled from "styled-components"

export const Area = styled.div`
  flex: 1;
`

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
  padding: 20px 8px 124px 16px; // 32px 16px;
`

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Line = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: stretch;
  gap: 16px;
  flex: 12;
`

export const FieldWrapper = styled.div<{ $flex: number }>`
  flex: ${({ $flex }) => $flex};
  height: 100%;
`
