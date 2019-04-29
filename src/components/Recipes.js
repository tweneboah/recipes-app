import React, { Component } from 'react';
import RecipesList from '../components/RecipesList'; 
import Search from '..components/Search';
class Recipes extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                
                <Search/>
                <RecipesList/>
            </>
         );
    }
}
 
export default Recipes;