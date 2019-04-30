import React, { Component } from 'react';
import RecipeComponent from './RecipeComponent';



class RecipeListComponent extends Component {
  
    render() { 
        //DESTRUCTURING DATA
  const {recipes} = this.props
        return ( 
            <>
               <div className='container py-5'>
                 {/* Title */}
                 <div className='row'>
                    <div className='col-10 mx-auto col-md-6 text-center mb-3'>
                        <h1 className='text-slanted'> Recipe List</h1>
                    </div>
                     {/* End of Title */}
                     
                 </div>
                 <div className='row'>
                       {recipes.map((recipe) => {
                           return <RecipeComponent key={recipe.recipe_id} recipe={recipe} ></RecipeComponent>
                       })}
                </div>  
            </div>
            </>
           
         );
    }
}
 
export default RecipeListComponent;