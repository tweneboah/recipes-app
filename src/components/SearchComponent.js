import React, { Component } from 'react';

class SearchComponent extends Component {
    
    render() { 
        //DESTRUCTURING THE PROPS
        const {handleChange, handleSubmit, search} = this.props;
        return ( 
            <div className='container'>
             <div className='row'>
               <div className='col-10 mx-auto col-md-8 mt-5 text-center'> 
                  <h1 className='text-slanted'>Search Recipes with <strong className='text-orange'>My-Recipes</strong></h1>
                  <hr/>
                  <form className='mt-5'>
                    <label htmlFor='search' className='text-capitalize'>Type recipes with separated comma</label>
                         <div className='input-group'>
                             <input type='text' name='search' className='form-control' placeholder='carrot, onion, beef' value= {search} onChange={handleChange}/>
                               <div className='input-group-append'>
                                    <button type='submit' className='bg-success input-group-text text-white' onClick={handleSubmit}>
                                      <i className='fas fa-search '/>
                                    </button>
                               </div>
                         </div>
                  </form>
               </div>

             </div>
                
            </div>
         );
    }
}
 
export default SearchComponent;