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
