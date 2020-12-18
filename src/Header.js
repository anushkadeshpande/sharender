import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import Logo from "./logo.png"

function Header() {
    return (
        <div className="header__icons">
        <IconButton>
            <PersonIcon fontSize="large" className="person__icon"/>
        </IconButton>
        <img src={Logo} alt="logo" className="header__logo"/>
        <IconButton>
        <ForumIcon fontSize="large" className="person__icon"/>
        </IconButton>
        </div>
    )
}

export default Header
