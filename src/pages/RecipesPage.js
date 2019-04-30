import React, { Component } from 'react';
import RecipeListComponent from '../components/RecipeListComponent';
import SearchComponent from '../components/SearchComponent';
import {recipeData} from '../data/tempList';

class RecipesPage extends Component {
  
  state = {
      recipes: recipeData,
      search: ''
  }

  //METHODS
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  //HANDLE SUBMIT
  handleSubmit = (e) => {
  e.preventDefault()
  }

    render() { 
        return <>
      
          <SearchComponent search ={this.state.search} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}/> 
          <RecipeListComponent recipes = {this.state.recipes}/>
        
        </>
    }
}
 
export default RecipesPage;