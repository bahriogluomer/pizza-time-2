import './reset.css'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import OrderPage from "./pages/OrderPage"
import SuccessPage from "./pages/SuccessPage"

function App() {
  
  return (
    <>
    <Switch>
      <Route path='/' exact><HomePage/></Route>
      <Route path='/order'><OrderPage/></Route>
      <Route path='/success' ><SuccessPage/></Route>
    </Switch>
    </>
  )
}

export default App
