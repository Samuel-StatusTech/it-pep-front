import styled from "styled-components"

export const Subpage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 8px;
`

export const SubpageTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue.dark};
  font-weight: 500;
  font-size: 18px;
  padding: 16px;
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

export const FBLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`

export const FormBlockFields = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: stretch;
  gap: 16px;
  flex: 12;
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

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
`

export const InfoName = styled.span`
  margin-left: 28px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.black};
`

export const Laboratory = styled.span`
  font-size: 14px;
  color: #8f9396;
  font-style: italic;
`
