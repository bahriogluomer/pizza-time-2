import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import classes from"./HomePage.module.css";
import styled from 'styled-components';

const StyledBody = styled.div`
background: url('../Assets/mvp-banner.png');
background-size: cover;  /* Ensure the background image covers the entire container */
background-position: center; /* Center the background image */
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;

`;

const StyledButton = styled.button`
display: flex;
height: 56px;
padding: 0 50.159px 0 49.641px;
justify-content: center;
align-items: center;
border-radius: 50px;
background: #FDC913;
font-weight: bold;
font-size: 2rem;
border: none;
font-family: 'Barlow Condensed', sans-serif;
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.05);
}
`

export default function HomePage () {
  const history = useHistory('/');

  const handleButtonClick = () => {
    history.push('/order');
  };
  return (
    <StyledBody>
      <Header/>
      <div className={classes.mainContainer}>
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
        <StyledButton onClick={handleButtonClick}>ACIKTIM</StyledButton>
      </div>
    </StyledBody>
  );
}

