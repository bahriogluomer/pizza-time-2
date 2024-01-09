import './reset.css'
import './index.css'
import { Route, Switch,BrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import OrderPage from "./pages/OrderPage"
import SuccessPage from "./pages/SuccessPage"


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact><HomePage/></Route>
      <Route path='/order'exact><OrderPage/></Route>
      <Route path='/success'exact ><SuccessPage/></Route>
    </Switch>
    </BrowserRouter>
    
    </>
  )
}

export default App
