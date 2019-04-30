import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class RecipeComponent extends Component {
    
    render() { 
        //DESTRUCTURING
        const {publisher, title, source_url, recipe_id, image_url} = this.props.recipe
        return ( 
            <div className='col-10 mx-auto col-md-6 col-lg-4'>
                 <div className='card' style={{height:'100%'}}>
                   <img src={image_url} style={{height:'14rem'}} className='img-card-top' alt='recipe'/>

                   <div className='card-body'>
                       <h6>{title}</h6>
                       <h6 className='text-warning'>Provide by: {publisher}</h6>
                   </div>

                   <div className='card-footer'>
                     <Link to={`/recipes/${recipe_id}`} className='btn btn-primary text-capitalize'>Details</Link>
                    
                     <a className='btn btn-success mx-2 text-capitalize' href={source_url} target='_blank'rel='nooper noreferrer' >Recipe Url
                     </a>
                   </div>
                 </div>
            </div>
         );
    }
}
 
export default RecipeComponent;