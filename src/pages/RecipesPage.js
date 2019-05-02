import React, { Component } from 'react';
import RecipeListComponent from '../components/RecipeListComponent';
import SearchComponent from '../components/SearchComponent';
import {recipeData} from '../data/tempList';

class RecipesPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      search: '',
      url: 'https://www.food2fork.com/api/search?key=c099484d609b9f38cb5afb78bf113c12',

      base_url: 'https://www.food2fork.com/api/search?key=c099484d609b9f38cb5afb78bf113c12',

      query: '&q=',
      error: ''
     }
     //Binding
     this.getRecipes = this.getRecipes.bind(this)
  }


async getRecipes() {
  try {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    if(jsonData.recipes.length ===0) {
      console.log(jsonData)
      this.setState({
        error: "Your search didn't return any recipes"
        
      })

    }else {
      console.log(jsonData.recipes);
      //Updating state
      this.setState({
        recipes: jsonData.recipes,
        error: ''
      })
    }
   
  } catch (error) {
     console.log(error)
  }
}

componentDidMount() {
   this.getRecipes()
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

  const {base_url, query, search} = this.state;
  this.setState({
    url: `${base_url}${query}${search}`,
    search: ''
     }, () => this.getRecipes())

     console.log('Fltering')
  }

    render() { 
        return <>
      
          <SearchComponent search ={this.state.search} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}/> 

          {this.state.error ? (<section>
            <div className='row'>
              <div className='col'>
                <h3 className='text-center text-danger mt-5'>{this.state.error}</h3>

              </div>
            </div>
          </section>): ( <RecipeListComponent recipes = {this.state.recipes}/>) }
         
        
        </>
    }
}
 
export default RecipesPage;