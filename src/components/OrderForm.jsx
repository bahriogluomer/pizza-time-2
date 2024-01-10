
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
display: flex;
height: 3rem;
width:16rem;
padding: 0 50px 0 50px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: #FDC913;
font-weight: bold;
font-size: 1.2rem;
border: none;
margin-top: 1.5rem;
font-family: 'Barlow Condensed', sans-serif;
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.05);
}
`
//TODO
//ekmalzemeler arrayi olustur maple 
//inline style'lar yok edilecek
//

const initialForm = {
  name: "",
  pizzaSize: "",
  crustChoice:"",
  selectedToppings: [],
  orderNote: "",
  orderQuantity: 1,
  totalPrice: () => (85.5 + initialForm.orderQuantity * initialForm.selectedToppings.length * 5),
};

const initialErrors = {
  name: false,    // if name.length<=4 true
  pizzaSize: false,   //if not selected true
  crustChoice: false, //if not selected true
  selectedToppings: false, // if selectedToppings.length>10 true
}



export default function OrderForm () {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

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

  const secimler = formData.selectedToppings.length*5;
  const toplam = (formData.totalPrice()+secimler)*formData.orderQuantity;

  
  //const totalPrice = (85.50 + selectedToppings.length * 5) * quantity;

  return (
  <form onSubmit={handleSubmit} style={{ width: '40rem', fontFamily: "'Barlow Condensed', sans-serif", fontWeight:'bold', fontSize:'1.2rem', color:'black' }}>
    <div style={{display:'flex', justifyContent:"space-between"}}>
    <label>Boyut Seç:</label>
    <label>Hamur Seç:</label>
    </div>
    <div style={{display:'flex', justifyContent:"space-between"}}>
    
  <div style={{display:'flex', flexDirection:'column',flexBasis: 'flex-start'}}>
    <span>
    <input type="radio" name="size" value="small" />
    <label>Küçük</label>
    </span>
    
    <span>
      <input type="radio" name="size" value="medium" />
    <label>Orta</label>
    </span>
    
    <span>
    <input type="radio" name="size" value="large" />
    <label>Büyük</label>
    </span>
  </div>

  
    <div>
    <select>
      <option value="thin">İnce</option>
      <option value="medium">Orta</option>
      <option value="thick">Kalın</option>
    </select>
    </div>
  </div>
  

  {/**/}

  <div style={{marginTop:'2rem', marginBottom:'2rem'}}>
  <label>Ek Malzemeler:</label>
  <label>En Fazla 10 malzeme seçebilirsiniz. 5₺</label>
  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    
    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping1" value="pepperoni" onChange={(e) => handleCheckboxChange(e, "pepperoni")} />
        <label htmlFor="topping1">Pepperoni</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping2" value="tavuk" onChange={(e) => handleCheckboxChange(e, "tavuk")} />
        <label htmlFor="topping2">Tavuk</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping3" value="misir" onChange={(e) => handleCheckboxChange(e, "misir")}/>
        <label htmlFor="topping3">Mısır</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping4" value="sarimsak" onChange={(e) => handleCheckboxChange(e, "sarimsak")}/>
        <label htmlFor="topping4">Sarımsak</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping5" value="ananas" onChange={(e) => handleCheckboxChange(e, "ananas")} />
        <label htmlFor="topping5">Ananas</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping6" value="sosis" onChange={(e) => handleCheckboxChange(e, "sosis")} />
        <label htmlFor="topping6">Sosis</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping7" value="sogan" onChange={(e) => handleCheckboxChange(e, "sogan")}/>
        <label htmlFor="topping7">Soğan</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
      <input type="checkbox" id="topping8" value="sucuk" onChange={(e) => handleCheckboxChange(e, "sucuk")}/>
      <label htmlFor="topping8">Sucuk</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping9" value="biber" onChange={(e) => handleCheckboxChange(e, "biber")} />
        <label htmlFor="topping9">Biber</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping10" value="kabak" onChange={(e) => handleCheckboxChange(e, "kabak")}/>
        <label htmlFor="topping10">Kabak</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping11" value="kjambon" onChange={(e) => handleCheckboxChange(e, "kjambon")} />
        <label htmlFor="topping11">Kanada Jambonu</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping12" value="domates" onChange={(e) => handleCheckboxChange(e, "domates")}/>
        <label htmlFor="topping12">Domates</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping13" value="jalapeno" onChange={(e) => handleCheckboxChange(e, "jalapeno")}/>
        <label htmlFor="topping13">Jalepeno</label>
    </div>

    <div style={{ flex: '0 0 30%', marginBottom: '10px' }}>
        <input type="checkbox" id="topping14" value="salam" onChange={(e) => handleCheckboxChange(e, "salam")}/>
        <label htmlFor="topping14">Salam</label>
    </div>
  </div>
</div>

{/**/}

<label>Sipariş Notu:</label>
<textarea placeholder="Siparişinize eklemek istediğiniz bir not var mı?" /> {/*handlechange fonksiyonu yaz*/}

{/**/}

<label>İsminiz:</label>
<input type="text" /> {/*handlechange fonksiyonu yaz*/}

{/**/}
<div>
  <span>
  <label>Adet:</label>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <button type="button" onClick={handleDecrement}>-</button>
    <span>{formData.orderQuantity}</span> {/*should be increasing or decreasing orderQuantity*/}
    <button type="button" onClick={handleIncrement}>+</button>
  </div>
</span>

{/**/}

<span>
  <div>
    <p>Seçimler: {secimler} </p> {/*should display (selectedToppings.length*5) */}
    <p>Toplam:{toplam}</p>  {/*should display totalPrice */}
    <StyledSubmitButton type="submit">SİPARİŞ VER</StyledSubmitButton>
  </div>
  </span>
  </div>

{/**/}

  
</form>
);
}
