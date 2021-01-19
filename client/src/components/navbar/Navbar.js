import React, {useEffect} from 'react'
import { AuthConsumer, } from '../../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

const Navbar = (props) => {

  useEffect(() => {
    
  }, [])

// if statement makes logo take you to home or profile depending on login status
const {handleLogout} = props.auth;
if ( props.auth.user === null ) {
  return (
    <>
          <Link to='/'>Home</Link>
          <Link to='/login'>Log In</Link>
          <Link to='/register'>Register</Link>
    </>
  )
} else {
  return (
    <>
      <Link to='/profile'></Link>
      <Link onClick={ () => handleLogout(props.history)} to='/'>Log Out</Link>
    </>
  )
}
}

export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);