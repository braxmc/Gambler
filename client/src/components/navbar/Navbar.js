import React, {useEffect} from 'react';
import { AuthConsumer, } from '../../providers/AuthProvider';
import { Link, withRouter, } from 'react-router-dom';

import { NavLink, NavWrap, LogoWrap, Img, NavbarWrap } from './NavbarElements';

import Logo from '../../images/dice.png';

const Navbar = (props) => {

  useEffect(() => {
    
  }, [])

// if statement makes logo take you to home or profile depending on login status
const {handleLogout} = props.auth;
if ( props.auth.user === null ) {
  return (
    <NavbarWrap>
    <LogoWrap>
      <NavLink to='/'>
        <Img src={Logo} alt='dice logo' />
      </NavLink>
    </LogoWrap>
    <NavWrap>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </NavWrap>
    </NavbarWrap>
  )
} else {
  return (
    <NavbarWrap>
      <LogoWrap>
        <NavLink to='/'>
          <Img src={Logo} alt='dice logo' />
        </NavLink>
      </LogoWrap>
      <NavWrap>
        <NavLink to='/'>Home</NavLink>
        <NavLink onClick={ () => handleLogout(props.history)} to='/'>Log Out</NavLink>
      </NavWrap>
    </NavbarWrap>
  )
}
}

export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);