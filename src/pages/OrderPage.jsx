import Header from '../components/Header'
import classes from './OrderPage.module.css'
import styled from 'styled-components'
import OrderForm from '../components/OrderForm';

const StyledProductName = styled.div`
display: flex;
justify-content:flex-start;
width: 40rem;
text-align: left;
color: black;
font-size: 1.5rem;
font-weight: bolder;
font-family: 'Barlow', sans-serif;
margin-top: 3rem;
padding: 0;
`;

const StyledProductPrice = styled.div`
display: flex;
justify-content:flex-start;
width: 40rem;
text-align: left;
color: black;
font-size: 2rem;
font-weight: bold;
margin-top: 2rem;
padding: 0;
`;

const StyledProductDesc = styled.div`
display: flex;
justify-content:flex-start;
width: 40rem;
text-align: left;
color: black;
font-size: 1.2rem;
font-weight: light;
font-family: 'Barlow Condensed', sans-serif;
line-height: 1.8;
margin: 1rem;
padding: 0;
`;

export default function OrderPage () {
    return (
    <>
    <Header/>
    <div className={classes.mainContainer}>
      <StyledProductName>Position Absolute Acı Pizza</StyledProductName>
      <StyledProductPrice>85.50 ₺</StyledProductPrice>
      <StyledProductDesc>
        Frontend Dev Olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
    </StyledProductDesc>
    <OrderForm/>
    </div>
    </>
)
}