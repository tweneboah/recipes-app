import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import SingleRecipePage from './pages/SingleRecipePage'
import DefaultPage from './pages/DefaultPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavbarComponent';

class App extends React.Component {

  render() { 
    return ( 
 
      <Router>
        <main>
          {/* navbar */}
          <Navbar/>
          <Switch>
             <Route path ='/' exact component ={HomePage}/>
             <Route path ='/recipes' component ={RecipesPage}/>
             <Route path ='/recipes/:id' component ={SingleRecipePage}/>
             <Route  component ={DefaultPage}/>
          </Switch>
        </main>
      </Router>
     );
  }
}
 

export default App;
