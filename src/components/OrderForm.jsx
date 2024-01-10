
import { useHistory } from 'react-router-dom';

export default function OrderForm () {
  const history = useHistory();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/success');
  };

 
  //const totalPrice = (85.50 + selectedToppings.length * 5) * quantity;

  return (
    <div style={{ width: '40rem' }}>
  <label>Boyut Seç:</label>
  <div style={{display:'flex', flexDirection:'column',flexBasis: 'flex-start'}}>
    <input type="radio" name="size" value="small" />
    <label>Küçük</label>

    <input type="radio" name="size" value="medium" />
    <label>Orta</label>

    <input type="radio" name="size" value="large" />
    <label>Büyük</label>
  </div>

  <label>Hamur Seç:</label>
  <div>
    <select>
      <option value="">Hamur Seç</option>
      <option value="thin">İnce</option>
      <option value="medium">Orta</option>
      <option value="thick">Kalın</option>
    </select>
  </div>

  <div>
  <label>Ek Malzemeler:</label>
  <label>En Fazla 10 malzeme seçebilirsiniz. 5₺</label>
  <div style={{ display: 'flex', margin: '5rem', height: '10rem'}}>
    <div style={{ flex: 1, marginRight: '20px'}}>
    <span>
    <input type="checkbox" id="topping1" value="topping1"/>
    <label htmlFor="topping1">Pepperoni</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping2" value="topping2"/>
    <label htmlFor="topping2">Tavuk</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping3" value="topping3"/>
    <label htmlFor="topping3">Mısır</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping4" value="topping4"/>
    <label htmlFor="topping4">Sarımsak</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping5" value="topping5"/>
    <label htmlFor="topping5">Ananas</label>
    </span>
    
  </div>

  <div style={{  flex: 1, marginRight: '20px' }}>
    <span>
    <input type="checkbox" id="topping6" value="topping6"/>
    <label htmlFor="topping6">Sosis</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping7" value="topping7"/>
    <label htmlFor="topping7">Soğan</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping8" value="topping8"/>
    <label htmlFor="topping7">Sucuk</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping9" value="topping9"/>
    <label htmlFor="topping7">Biber</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping10" value="topping10"/>
    <label htmlFor="topping7">Kabak</label>
    </span>
    
</div>
<div style={{ flex: 1 }}>
    <span>
    <input type="checkbox" id="topping11" value="topping11"/>
    <label htmlFor="topping11">Kanada Jambonu</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping12" value="topping12"/>
    <label htmlFor="topping12">Domates</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping13" value="topping13"/>
    <label htmlFor="topping13">Jalepeno</label>
    </span>
    
    <span>
    <input type="checkbox" id="topping14" value="topping14"/>
    <label htmlFor="topping14">Sucuk</label>
    </span>   
</div>
</div>


  

  <label>Sipariş Notu:</label>
  <textarea defaultValue="Siparişine eklemek istediğin bir not var mı?" />

  <label>İsminiz:</label>
  <input type="text" />

  <label>Adet:</label>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <button type="button">-</button>
    <span>1</span>
    <button type="button">+</button>
  </div>

  <div>
    <p>Seçimler: 0 Toplam 0.00</p>
  </div>

  <button type="submit" onClick={handleSubmit}>SİPARİŞ VER</button>
</div>
</div>
);
}
