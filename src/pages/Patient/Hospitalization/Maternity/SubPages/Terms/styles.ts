import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
  padding: 24px;
  gap: 16px;
`

export const SubpageTitle = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue.soft};
`

export const Text = styled.p`
  & > span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral.black};
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SearchArea = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.bluewhite};
  flex: 1;
  padding: 8px 24px;
  margin: 0 24px 24px;
  border-radius: 36px;
  width: calc(100% - (24px * 2));
`

export const InputWrapper = styled.div<{ $width?: string }>`
  width: fit-content;
  display: inline-block;
  align-items: center;
  padding: 8px 12px;
  width: ${({ $width }) => $width ?? "unset"};
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

// Form

export const FormLine = styled.div`
  display: flex;
`

export const FormBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const FormBlockFields = styled.div`
  flex: 1;
  display: flex;
  padding: 24px;
`
