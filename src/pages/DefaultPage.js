import React, { Component } from 'react';
import Header from '../components/Header'
import {Link} from 'react-router-dom'

class DefaultPage extends Component {
    
    render() { 
        return (  
           <Header title='404' styleClass= 'default-hero'>
             <h2 className='text-light text-uppercase'>You are in a wrong place</h2>
            <Link to='/' className='text-uppercase btn btn-danger btn-lg mt-3'>
            Return Home
             </Link>
           </Header>
        );
    }
}
 
export default DefaultPage;

  