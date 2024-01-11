
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import classes from './OrderForm.module.css';
import { validateName } from '../utilities/validation';
import axios from 'axios';

const StyledSubmitButton = styled.button`
display: flex;
height: 3rem;
width:24rem;
padding: 0 50px 0 50px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: #FDC913;
font-weight: 800;
font-size: 1.2rem;
border: none;
font-family: 'Barlow', sans-serif;
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.02);
}
@media screen and (max-width: 768px) {
  width:24rem;
  font-size: 0.8rem; /* Decrease font size on smaller screens */
  max-width: 100%; /* Allow content to take the full width on smaller screens */
}
`;

const ErrorText = styled.p`
  color: red;
`;

//TODO
//cypress testleri yazilacak

const toppingsArray = ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak', 'Jambon', 'Domates', 'Jalepeno', 'Salam'];

const initialForm = {
  name: "",
  size: "",
  crust:"",
  selectedToppings: [],
  note: "",
  orderQuantity: 1,
  subtotal: 0,
};

const totalPrice = () => (85.5 + initialForm.orderQuantity * initialForm.selectedToppings.length * 5)


const initialErrors = {
  name: false,    // if name.length<=4 true
  size: false,   //if not selected true
  crust: false, //if not selected true
  selectedToppings: false, // if selectedToppings.length>10 true
}

const errorMessages = {
  name: "İsim en az dört karakter olmalıdır.",
  size: "Lütfen boyut seçiniz",
  crust: "Lütfen hamur kalınlığı seçiniz.",
  selectedToppings: "En fazla 10 adet ek malzeme ekleyebilirsiniz."
};



export default function OrderForm () {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const toppingsPrice = formData.selectedToppings.length * 5;
  const totalAmount = (totalPrice() + toppingsPrice) * formData.orderQuantity;
  const history = useHistory();

  const handleChange = (event) => {
    let { value, name,type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));   
  };

  useEffect(()=>{

    if (formData.selectedToppings.length<=10) {
      setErrors({ ...errors, selectedToppings: false });
    } else if (formData.selectedToppings.length>10) {
      setErrors({ ...errors, selectedToppings: true });
    }  
  },[formData.selectedToppings])


  

// updating the subtotal via useEffect
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      subtotal: totalAmount,
    }));
  }, [formData.selectedToppings, formData.orderQuantity, totalAmount]);

  // 

  const handleIncrement = () => {
    setFormData({ ...formData, orderQuantity: formData.orderQuantity + 1 })
  };

  const handleDecrement = () => {
    if(formData.orderQuantity>1) {
      setFormData({ ...formData, orderQuantity: formData.orderQuantity - 1 })
    }
  };

  const handleCheckboxChange = (event, topping) => {
    const isChecked = event.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      selectedToppings: isChecked
        ? [...prevData.selectedToppings, topping]
        : prevData.selectedToppings.filter((item) => item !== topping),
    }));
  };

  


  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check form validity
    const { name, size, crust, selectedToppings } = formData;
  
    const nameError = !validateName(name);
    const crustError = !crust.trim();
    const sizeError = size === '';
    const toppingsError = selectedToppings.length > 10;
  
    setErrors({
      ...errors,
      name: nameError,
      crust: crustError,
      size: sizeError,
      selectedToppings: toppingsError,
    });
  
    if (nameError || crustError || sizeError || toppingsError) {
      return;
    }
  
    axios
      .post('https://jsonplaceholder.typicode.com/posts', formData)
      .then((response) => {
        console.log('Response:', response.data);
        history.push('/success');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

//


  return (
  <form className={classes.form} onSubmit={handleSubmit} >
    <div className={classes.topLabelContainer}> 
    <label>Boyut Seç<span className={classes.redAsterisk}>*</span></label>
    <label>Hamur Seç<span className={classes.redAsterisk}>*</span></label>
    </div>
    <div className={classes.topContainer}>
    
  <div className={classes.radioColumn}>
    <span>
    <input type="radio" name="size" value="small" onChange={handleChange} />
    <label>Küçük</label>
    </span>
    <span>
    <input type="radio" name="size" value="medium" onChange={handleChange}/>
    <label>Orta</label>
    </span>
    <span>
    <input type="radio" name="size" value="large" onChange={handleChange} />
    <label>Büyük</label>
    </span>
  </div>
 
<div>
    <select name="crust" onChange={handleChange}>
      <option value="">Seçiniz</option>
      <option  value="superthin" >Süpper İnce</option>
      <option  value="thin">İnce</option>
      <option  value="medium">Orta</option>
      <option  value="thick">Kalın</option>
    </select>
    </div>
  </div>

<div className={classes.errorBox}>
  {errors.size && (
  <ErrorText data-test-id="error">{errorMessages.size}</ErrorText>
  )}

  {errors.crust && (
    <ErrorText data-test-id="error">{errorMessages.crust}</ErrorText>
  )}
</div>
  

  <label>Ek Malzemeler</label>
  <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
  <div className={classes.checkboxContainer}>
        {toppingsArray.map((topping, index) => (
          <div key={index} className={classes.checkboxColumn}>
            <div className={classes.checkboxElement}>
              <input
              type="checkbox"
              id={`topping${index}`}
              value={topping.toLowerCase()} 
              onChange={(e) => handleCheckboxChange(e, topping.toLowerCase())}
              checked={formData.selectedToppings.includes(topping.toLowerCase())}
            />
            <label htmlFor={`topping${index}`}>{topping}</label>
            </div>
            
          </div>
        ))}
</div>

{errors.selectedToppings && (
    <ErrorText data-test-id="error">{errorMessages.selectedToppings}</ErrorText>
  )}

{/**/}
<div className={classes.orderNote}>
<label>Sipariş Notu</label>
<input type='text' name='note' placeholder="Siparişinize eklemek istediğiniz bir not var mı?" onChange={handleChange} /> {/*handlechange fonksiyonu yaz*/}
</div>

{/**/}

<div className={classes.orderNote}>
<label>İsminiz<span className={classes.redAsterisk}>*</span></label>
<input type="text" name='name' placeholder="İsminizi giriniz" onChange={handleChange} />
</div>

{errors.name && (
  <ErrorText data-test-id="error">{errorMessages.name}</ErrorText>
  )}


<hr/>

{/**/}

<div className={classes.bottomContainer}>
  <div className={classes.quantitySelector}>
    <button className={classes.buttonL} type="button" onClick={handleDecrement}>-</button>
    <span >{formData.orderQuantity}</span> {/*should be increasing or decreasing orderQuantity*/}
    <button className={classes.buttonR} type="button" onClick={handleIncrement}>+</button>
  </div>
{/**/}
<div className={classes.confirmationBox}>
<div>
    <h1>Sipariş toplamı</h1>
    <div className={classes.orderSumBox}><p>Seçimler:</p> <p>{toppingsPrice} ₺</p></div>{/*should display (selectedToppings.length*5) */}
    <div className={classes.orderSumBox2}><p>Toplam: </p> <p>{totalAmount} ₺</p></div> {/*should display totalPrice */}
</div>
</div>
</div>
<div className={classes.buttonContainer}>
<StyledSubmitButton data-test-id="submit-button" type="submit" >SİPARİŞ VER</StyledSubmitButton>
</div>
</form>
);
}