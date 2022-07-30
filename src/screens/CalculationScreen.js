import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import '../App.css'; // CSS
// COMPONENTS
import AppBar from "../components/appBar/AppBar";
import ProductCard from '../components/productCard/ProductCard';
import AddProductComp from '../components/addproducticon/AddProductComp';
import ResultComp from '../components/resultComp/ResultComp';

export default function CalculationScreen({ data, addItem, removeItem, handleInputData, calculateBill, resultDiv }) {

    // get data through loacation API
    const { state } = useLocation();
    const { uname, theme } = state;

    // DARK LIGHT theme
    const [appTheme, setAppTheme] = useState(theme);
    const [username, setUsername] = useState('user');
    function setCurrentTheme(theme) {
        setAppTheme(theme);
    }
    // DOM manipulation ahead!
    useEffect(() => {
        // direct DOM manipulation is not safe, must use useRef hook, soon
        if (appTheme === 'dark') {
            document.querySelector('.calculationscreen-wrapper').classList.remove('light');
            document.querySelector('.calculationscreen-wrapper').classList.add('dark');
        }
        if (appTheme === 'light') {
            document.querySelector('.calculationscreen-wrapper').classList.remove('dark');
            document.querySelector('.calculationscreen-wrapper').classList.add('light');
        }
        // set username
        setUsername(uname ? uname : 'user');
    }, [appTheme, uname]);
    // - THEME SECTION END -


    return (
        <main className='calculationscreen-wrapper'>
        <AppBar theme={ appTheme } changetheme={ setCurrentTheme } greetUser={ username } />
        {
            data.map(item =>
                <ProductCard
                key = {item.id}
                productInfo = { item }
                removeItem = { removeItem }
                handleInput = { handleInputData }
                />)
            }
        {
            resultDiv.visible && <ResultComp result={ resultDiv.result } optimizeData={ data } />
        }
        <AddProductComp addItem = { addItem } />
        <button className='calculatebill-btn' onClick={ () => calculateBill(data) }>calculate</button>
    </main>
    );
}