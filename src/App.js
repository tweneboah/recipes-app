import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipePage'
import DefaultPage from './pages/DefaultPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends React.Component {

  render() { 
    return ( 
 
      <Router>
        <main>
          {/* navbar */}
          <Navbar/>
          <Switch>
             <Route path ='/' exact component ={Home}/>
             <Route path ='/recipes' component ={Recipes}/>
             <Route path ='/recipes/:id' component ={SingleRecipe}/>
             <Route  component ={DefaultPage}/>
          </Switch>
        </main>
      </Router>
     );
  }
}
 

export default App;
