import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Cart} from "./pages/Cart";
import { ItemDetail } from "./pages/ItemDetail"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/items/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
