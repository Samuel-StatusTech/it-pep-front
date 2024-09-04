import styled from "styled-components"
import bg from "../../assets/images/login_bg.png"

export const Page = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      90deg,
      rgba(20, 61, 105, 0.5),
      rgba(20, 61, 105, 0)
    );
  }
`

export const ContentArea = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 100%;
    margin: auto;
    padding: 24px;
  }
`

export const FormCard = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 32px;
  padding: 32px 48px;
  gap: 36px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding: 24px 36px;
    width: 100%;
  }
`

export const FormTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.blue.soft};
  text-align: center;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 100%;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export const FieldArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue.light};
  color: ${({ theme }) => theme.colors.blue.light};
  padding: 8px 16px;

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.soft};
`

export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  font-size: 16px;
  line-height: 16px;
  height: 100%;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue.light};
    font-weight: 300;
  }
`

export const FormSubmit = styled.div`
  display: flex;
  justify-content: stretch;
`

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue.soft};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 20px;
  font-weight: 700;
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.dark};
  }
`

// Dropdown
export const Select = styled.div`
  position: relative;
`

export const SelectMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue.light};
  color: ${({ theme }) => theme.colors.blue.light};
  padding: 12px 16px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    transform: rotate(0deg);
    transition: transform 0.2s;

    &.turned {
      transform: rotate(180deg);
    }
  }
`

export const Dropdown = styled.div<{ $showing: boolean }>`
  position: absolute;
  display: ${({ $showing }) => ($showing ? "flex" : "none")};
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue.light};
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding-left: 12px;
  width: 100%;
`

export const DropdownSearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 4px 0;
`

export const DropdownInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  padding: 8px 4px;
  font-size: 16px;
  line-height: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue.light};
    font-weight: 300;
  }
`

export const DropdownListArea = styled.div`
  max-height: 360px;
  overflow: auto;
`

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
`

export const DropdownItem = styled.div`
  padding: 4px 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.bluegrey};
    cursor: pointer;
  }
`
