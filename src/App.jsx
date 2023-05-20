import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import { Menu } from './components/Menu/Menu'
import { ItemListContainer } from './components/ItemListCointainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './Context/CartContext'


function App() {

  return (
    <CartContextProvider>
       <div>
        <Router>
          <Menu/> 
          <Routes>
            <Route path='/' element = {<ItemListContainer />} />
            <Route path='/categoria/:categoria' element = {<ItemListContainer />} />
            
            <Route path='/detail/:pid' element = {<ItemDetailContainer />} />
            <Route path='/cart' element = {<CartContainer />} />

            <Route path = '*' element = {<Navigate to = {'/'} />} />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  )
}

export default App
