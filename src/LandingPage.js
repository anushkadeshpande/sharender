import React,{useState,useEffect} from 'react'
import App from './App'
import axios from './axios'
//for registration first retrive data just to check if username is available store input data into state
//for login retrieve data from mongo into state and then validate

function LandingPage() {
    const [user, getUsers] = useState([]);
    
    return (
        <div className='landingPage'>
            <label>Username</label>
            <input type='text' className='login-username'/><hr />
            <label>Password</label>
            <input type='password' className='login-username'/><hr />
            <button className='submit-button'>Sign Up</button>
        </div>
    )
}

export default LandingPage
