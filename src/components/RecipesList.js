import React, { Component } from 'react';
import Recipe from './Recipe'



class RecipesList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Recipes List
                <Recipe/>
            </div>
         );
    }
}
 
export default RecipesList;