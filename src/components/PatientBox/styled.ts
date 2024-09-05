import styled from "styled-components"

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  background-color: ${({ theme }) => theme.colors.backgrounds.card};
  padding: 18px 24px;
  border-radius: 8px;
  width: 100%;
`

export const UserInfo = styled.div`
  flex: 1;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 64px;
`

export const UserProfile = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.colors.blue.dark};
  display: grid;
  place-items: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.colors.neutral.black};
`

export const InfoName = styled.span`
  font-family: Roboto;
  font-weight: 600;
  font-size: 14px;
`

export const InfoValue = styled.span`
  opacity: 0.65;
  font-family: Roboto;
  font-size: 14px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.backgrounds.card};
  color: ${({ theme }) => theme.colors.blue.medium};
  display: grid;
  place-items: center;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue.dark};
    color: ${({ theme }) => theme.colors.neutral.bluewhite};
  }
`
