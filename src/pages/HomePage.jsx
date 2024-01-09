import classes from"./HomePage.module.css";
import styled from 'styled-components';

const StyledBody = styled.div`
  background: url('../Assets/mvp-banner.png');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default function HomePage () {
  return (
    <StyledBody>
      <div><p>Hello World</p></div> 
    </StyledBody>
  );
}

