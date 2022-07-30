import React from "react";
import { Link } from 'react-router-dom';
import ebimoLogo from '../assets/png/ebimo-white.png';
import arrowRightLogo from '../assets/svg/arrow-right.svg';
import '../index.css';

export default function HomeScreen() {
    // DARK THEME BY DEFAULT
    // const [appTheme, setAppTheme] = useState('dark');
    const appTheme = 'dark';
    return (
        <div className={ `homescreen-wrapper ${ appTheme === 'dark' ? 'dark' : 'light' }` }>
            <img src={ebimoLogo} className='app-logo' alt="App Logo"/>
            <Link to='/loginscreen'>
                <img src={arrowRightLogo} className='go-btn' alt="go icon" />
            </Link>
        </div>
    );
}