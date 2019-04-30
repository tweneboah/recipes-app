import React  from 'react'
import {Link} from 'react-router-dom';
const NavbarComponent = ()  => {
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
           <Link to='/' className='navbar-brand text-success'> 
           <h1 className='text-slanted'><strong className='text-orange'>My-Recipes</strong></h1>
           </Link>
         
           <div className='collapse navbar-collapse show ml-sm-5'>
             <ul className='navbar-nav'>
                 <li className='navbar-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                 </li>

                 <li className='navbar-item'>
                    <Link className='nav-link' to='/recipes'>Recipes</Link>
                 </li>

                 <li className='navbar-item'>
                    <Link className='nav-link'>About</Link>
                 </li>
             </ul>
           </div>
        </nav>
    )
}

export default NavbarComponent;