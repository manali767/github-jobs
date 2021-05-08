import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import store from './store'
import Job from "./Job";
import Header from "./Header"



function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>

        <Header />
        <Switch>
        <Route path="/">
            
            <Job />
        </Route>
               
       
        </Switch>
       
        </div>
      </Router>
      

      
        
     
    </Provider>
  )
}

export default App
