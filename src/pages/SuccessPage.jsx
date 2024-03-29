import Header from '../components/Header';
import classes from './SuccessPage.module.css'
import styled from 'styled-components';

const StyledBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ce2829;
min-height: 100vh; /* Set minimum height to 100% of the viewport height */
margin: 0; /* Remove default margin */
`;

export default function SuccessPage () {
    return (
      <StyledBody>
        <div className={classes.appContainer}>
      <Header/>
      <main className={classes.mainContent}>
        <div className={classes.congratulations}>
          <h1>TEBRİKLER!</h1>
          <h1>SİPARİŞİNİZ ALINDI!</h1>
        </div>
      </main>
    </div>
    </StyledBody>
    );
    }