
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import classes from './OrderForm.module.css';

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
`
//TODO
//ekmalzemeler arrayi olusturulup maplenecek
//handleChange kalan form elementleri icin yazilacak, secim ve girdilerin formData'yi guncellemeleri saglanacak 
//inline style'lar yok edilecek, order formun cssi duzeltilecek (spesifikasyonda oldugu gibi)
//Form ve yukarıdaki yazılarda font-family yanlis yalin barlow olacak
//onSubmit fonksiyonu useEffect kullanarak axios araciligiyla formData post edilecek, post data console.log ile gosterilecek
//cypress testleri yazilacak

const toppingsArray = ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Salam'];

const initialForm = {
  name: "",
  size: "",
  crust:"superthin",
  selectedToppings: [],
  note: "",
  orderQuantity: 1,
  subTotal: 85.5,
};

const totalPrice = () => (85.5 + initialForm.orderQuantity * initialForm.selectedToppings.length * 5)


const initialErrors = {
  name: false,    // if name.length<=4 true
  pizzaSize: false,   //if not selected true
  crust: false, //if not selected true
  selectedToppings: false, // if selectedToppings.length>10 true
}



export default function OrderForm () {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

const secimler = formData.selectedToppings.length*5;
const toplam = ((totalPrice()+secimler)*formData.orderQuantity);


  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/success');
    console.log(formData);
  };

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

  const handleChange = (event) => {
    let { value, name } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  
  //const totalPrice = (85.50 + selectedToppings.length * 5) * quantity;

  return (
  <form className={classes.form} onSubmit={handleSubmit} >
    <div className={classes.topLabelContainer}> {/*inline stylelari nasil css dosyasina aktarirsin dusun!!!*/}
    <label>Boyut Seç*</label>
    <label>Hamur Seç*</label>
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
      <option  value="superthin" >Süpper İnce</option>
      <option  value="thin">İnce</option>
      <option  value="medium">Orta</option>
      <option  value="thick">Kalın</option>
    </select>
    </div>
  </div>
  

  {/**/}
  <label>Ek Malzemeler</label>
  <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
  <div className={classes.checkboxContainer}>
        {toppingsArray.map((topping, index) => (
          <div key={index} className={classes.checkboxColumn}>
            <input
              type="checkbox"
              id={`topping${index}`}
              value={topping.toLowerCase()} 
              onChange={(e) => handleCheckboxChange(e, topping.toLowerCase())}
              checked={formData.selectedToppings.includes(topping.toLowerCase())}
            />
            <label htmlFor={`topping${index}`}>{topping}</label>
          </div>
        ))}
</div>

{/**/}
<div className={classes.orderNote}>
<label>Sipariş Notu</label>
<input type='text' name='note' placeholder="Siparişinize eklemek istediğiniz bir not var mı?" onChange={handleChange} /> {/*handlechange fonksiyonu yaz*/}
</div>


{/**/}
<div className={classes.orderNote}>
<label>İsminiz</label>
<input type="text" name='name' placeholder="İsminizi giriniz" onChange={handleChange} /> {/*handlechange fonksiyonu yaz*/}
</div>

<hr/>

{/**/}
<div className={classes.bottomContainer}>
  <span>
  
  <div className={classes.quantitySelector}>
    <button className={classes.buttonL} type="button" onClick={handleDecrement}>-</button>
    <span >{formData.orderQuantity}</span> {/*should be increasing or decreasing orderQuantity*/}
    <button className={classes.buttonR} type="button" onClick={handleIncrement}>+</button>
  </div>
</span>

{/**/}
<div className={classes.confirmationBox}>
<div>
    <h1>Sipariş toplamı</h1>
    <div className={classes.orderSumBox}><p>Seçimler:</p> <p>{secimler} ₺</p></div>{/*should display (selectedToppings.length*5) */}
    <div className={classes.orderSumBox2}><p>Toplam: </p> <p>{toplam} ₺</p></div> {/*should display totalPrice */}
</div>

</div>
</div>
<div className={classes.buttonContainer}>
<StyledSubmitButton type="submit">SİPARİŞ VER</StyledSubmitButton>
</div>

{/**/}

  
</form>
);
}