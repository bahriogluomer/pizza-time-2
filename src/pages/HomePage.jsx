import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import classes from"./HomePage.module.css";
import styled from 'styled-components';

const StyledHero = styled.div`
background: url('../Assets/mvp-banner.png');
background-size: cover; 
background-position: center; 
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
@media screen and (max-width: 768px) {

  font-size: 0.5rem; 
  max-width: 100%; 
  overflow-y: auto; 
}

`;

const StyledButton = styled.button`
display: flex;
height: 3.7rem;
width: 14rem;
padding: 0 50px 0 50px;
justify-content: center;
align-items: center;
border-radius: 50px;
background: #FDC913;
font-weight: bold;
font-size: 1.4rem;
border: none;
margin-top: 1.5rem;
font-family: 'Barlow', sans-serif;
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.05);
  @media screen and (max-width: 768px) {
     max-width: 100%;
     margin-bottom: 5rem;
     
  }
}
`

export default function HomePage () {
  const history = useHistory('/');

  const handleButtonClick = () => {
    history.push('/order');
  };
  return (
    <>
    <StyledHero>
    <Header/>
    <div className={classes.mainContainer}>
      <h1>KOD ACIKTIRIR</h1>
      <h1>PİZZA, DOYURUR</h1>
      <StyledButton data-test-id='hungry-button' onClick={handleButtonClick}>ACIKTIM</StyledButton>
    </div>
  </StyledHero>
  </>
  );
}

