import React, { Component } from 'react'
import Brand      from './Brand'
import Nav        from './Nav'
import SearchBar  from './SearchBar'
import UserLogin  from './UserLogin'
import UserLogout from './userLogout'
import UserProfile from './userProfile'
import Register from './userRegister'

//Parent component of Header
class Header extends Component {
 
  render() {

    let user = JSON.parse(localStorage.getItem('user')) || undefined;
    let style = {};
    let hide = {}
    if(user === undefined){
      style.display = "none"
    } else {
      hide.display = "none"
    }

    return (
        <header className="headerWrapper">

          <Brand />
          <Nav />
          <SearchBar />
          <div style= {style} eventKey={2}>
            <UserProfile />
          </div>
          <div style={hide}>
            <Register />
          </div>
          <div style={hide}>
          <UserLogin />
          </div>
          <div style= {style}>
          <UserLogout />
          </div>
        </header >
    )
  }
}

export default Header