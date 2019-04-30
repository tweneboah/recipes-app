import React, { Component } from 'react';
import {recipeData} from '../data/tempDetails';
import {Link} from 'react-router-dom';
class SingleRecipePage extends Component {
    
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipe: recipeData,
            id: id,
            loading: false
            
        }
    }

    render() { 
        //DESTRUCTURING
        const {image_url, publisher_url, source_url, title, ingredients, publisher} = this.state.recipe

        if(this.state.loading) {
            return(
                <div className='container'>
                  <div className='row'>
                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <h2 className='text-orange text-center'>Loading recipe....</h2>
                    </div>
                  </div>
                </div>
            )
        }else {
            return (
                <div className='container my-5'>
                    <div className='row'>
                      <div className='col-10 mx-auto col-md-6 my-3'>
                            <Link to='/recipes' className='btn btn-warning text-capitalize'> Back to Recipe List
                            </Link>
                            <img src={image_url} className='d-block w-100' style={{maxHeight:'30rem'}} alt='recipe'/>
                      </div>
                          {/* Info */}
                       <div className='col-10 mx-auto col-md-6 my-3'>
                            <h6 className='text-capitalize'>{title}</h6>
                            <h6 className='text-warning'>Provide by: {publisher}</h6>

                            <a href ={publisher_url} target='_blank' rel='noopener noreferrer' className='btn btn-primary mt-2 text-capitalize'>Publisher webpage</a>

                            <a href ={source_url} target='_blank' rel='noopener noreferrer' className='btn btn-success mt-2  mx-2 text-capitalize'>Recipe Url</a>

                            {/* list */}
                            <ul className='list-group mt-4'>
                                 <h2 className='mt-2 mb-4'>ingredients</h2>
                                 {ingredients.map((ingredient, index) => {
                                     return (
                                         <li key={index} className='list-group-item'>
                                            {ingredient}
                                         </li>
                                     )
                                 })}
                            </ul>
                        </div>

                    </div>
                </div>
            )
        }
        return <h4>The id for this recipe is : </h4>;
         
    }
}
 
export default SingleRecipePage;