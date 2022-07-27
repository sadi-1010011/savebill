import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

import ebimoLogo from '../assets/png/ebimo-white.png';
import arrowRightLogo from '../assets/svg/arrow-right.svg';
import '../index.css';

export default function LoginScreen() {
    const [appTheme, setAppTheme] = useState('dark');
    const [username, setUsername] = useState('');

    // pass data through loacation API in react-router V6
    const navigate = useNavigate();

    return (
        <div className={ `loginscreen-wrapper ${ appTheme === 'dark' ? 'dark' : 'light' }` }>
            <input type="text" id="uname" placeholder="username.." value={ username } onChange={ (e) => setUsername(e.target.value) } />
            <input type="number" id="psswd" placeholder="phone.." />
            <div onClick={ () => navigate('/calculationscreen', { state: username }) }>
                <button id="signin">enter</button>
            </div>
        </div>
    );
}