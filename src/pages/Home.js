import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
class Home extends Component {
   
    render() { 
        return (
            <Header title='Amazing Recipes'>
              <Link to='/recipes' className='text-uppercase btn btn-success btn-lg mt-3'>
              Search Recipes
              </Link>
            </Header>
        )
            
             
         
    }
}
 
export default Home;