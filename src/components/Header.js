import React from 'react';

const Header = ({children, title, styleClass}) =>  {
    return (
     <header>
         <div className='container-fluid'>
           <div className={`row align-items-center ${styleClass}`}>
              <div className='col text-center'>
                  <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>
                  {title}
                  </h1>
                  {/* Children */}
                  {children}
              </div>
           </div>
         </div>
     </header>
    )
}
 
export default Header;

Header.defaultProps = {
    title: 'Default title',
    styleClass: 'header-hero'
};