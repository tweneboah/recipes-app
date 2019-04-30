import React, { Component } from 'react';
import RecipeComponent from './RecipeComponent';



class RecipeListComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                Hello from Recipe List 
                <RecipeComponent/>
                
            </div>
         );
    }
}
 
export default RecipeListComponent;