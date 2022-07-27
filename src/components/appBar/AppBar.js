import React from "react";
import ebimoLogoWhite from '../../assets/png/ebimo-white.png';
import ebimoLogoBlack from '../../assets/png/ebimo-black.png';
import './appBar.css';
import { Link } from "react-router-dom";

export default function AppBar({ theme, changetheme, greetUser }) {
    const oppositeTheme = theme == 'dark' ? 'light' : 'dark';
    const themedLogo = theme == 'dark' ? ebimoLogoWhite : ebimoLogoBlack;
    return (
        <div className="app-topbar">
            <div className="appbar-logo-wrapper">
                <Link to='/'>
                    <img className="appbar-logo" src={ themedLogo } alt='app-logo' />
                </Link>
            </div>
            <span className="greet-user">{ greetUser ? `hello, ${ greetUser }` : '' }</span>
            <div className="theme-setter" style={{ 'color': theme == 'dark' ? 'white' : 'black' }} onClick={ () => changetheme(oppositeTheme) }>{ oppositeTheme }</div>
        </div>
    );
}