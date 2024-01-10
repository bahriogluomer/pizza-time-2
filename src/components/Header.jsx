import styled from "styled-components"

const StyledBody = styled.div`
background-color: #ce2829;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 0rem;
font-size: 50em;
height: 10rem;
`;
const Icon = styled.img`
  background-color: #ce2829;
  width: 100%;
  max-width: 25rem;
  height: auto;
`

export default function Header () {
    return (
        <StyledBody>
        <Icon src="../Assets/logo.svg" alt="Teknolojik Yemekler" />
      </StyledBody>
    )
}