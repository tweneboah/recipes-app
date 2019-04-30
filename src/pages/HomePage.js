import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {Link} from 'react-router-dom';
class HomePage extends Component {
   
    render() { 
        return (
            <HeaderComponent title='Outstanding Recipes'>
              <Link to='/recipes' className='text-uppercase btn btn-success btn-lg mt-3'>
              Search Recipes 
              </Link>
             <p className='display-4 text-warning'>{new Date().toLocaleTimeString()}</p> 
               
            </HeaderComponent>
          
        )
            
             
         
    }
}
 
export default HomePage;