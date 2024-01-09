import styled from "styled-components"

const StyledBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5rem;
`;

export default function Header () {
    return (
        <StyledBody>
        <img src="../Assets/logo.svg" alt="Teknolojik Yemekler" />
      </StyledBody>
    )
}