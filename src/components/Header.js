import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Header.module.css'
import {useDispatch} from 'react-redux'
import { authActions } from '../store/auth'

export default function Header() {

    const dispatch = useDispatch()
    const isAuth = useSelector( state => state.Auth.isAuthenticated)

    const logoutHandler = () =>{
        dispatch(authActions.logout())
    }
    return (
    <header className={classes.header}>
        <h1>Redux Auth</h1>
        {isAuth && (
        <nav>
            <ul>
                <li>
                    <a href='/'>My Products</a>
                </li>
                <li>
                    <a href='/'>My Sales</a>
                </li>
                <li>
                    <button onClick={logoutHandler}>Logout</button>                
                </li>
            </ul>
        </nav>
        ) }
    </header>
  )
}
