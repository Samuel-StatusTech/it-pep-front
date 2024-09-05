import styled from "styled-components"

export const Element = styled.aside<{ $opened: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.3s;

  & > svg {
    width: 156px;
    height: auto;
    opacity: 0;
    ${({ theme }) =>
      theme.animations.types.fade +
      theme.animations.durations.slow +
      theme.animations.delays.main(6)}
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    position: absolute;
    z-index: 10;
    height: calc(100vh + 30px);
    margin: -20px;
    margin-left: ${({ $opened }) => ($opened ? 0 : -264)}px;
  }
`

export const BurguerWrapper = styled.div<{ $opened: boolean }>`
  position: absolute;
  top: -4px;
  right: 0;
  transform: translateX(
    ${({ $opened }) => ($opened ? "50%" : "calc(100% + 7px)")}
  );
  transition: transform 0.3s;
  background-color: ${({ theme }) => theme.colors.neutral.ice};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.28);
  border-radius: 200px;
  padding: 8px;
  z-index: 2;
  display: none;
  place-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    display: grid;
  }
`

export const DashboardInfo = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
`

export const DashName = styled.div`
  color: currentColor;
  font-weight: 500;
  font-size: 20px;
`

export const BackDash = styled.button`
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: currentColor;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font: 14px 300 Roboto currentColor;
  }

  &:hover span {
    text-decoration: underline;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  width: 100%;
`
