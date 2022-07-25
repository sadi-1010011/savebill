import React, { useEffect, useState } from "react";
import '../App.css'; // CSS
// COMPONENTS
import AppBar from "../components/appBar/AppBar";
import ProductCard from '../components/productCard/ProductCard';
import AddProductComp from '../components/addproducticon/AddProductComp';
import ResultComp from '../components/resultComp/ResultComp';

export default function CalculationScreen({ data, addItem, removeItem, handleInputData, calculateBill, resultDiv }) {

    // DARK LIGHT theme
    const [appTheme, setAppTheme] = useState('dark');
    function setCurrentTheme(theme) {
        setAppTheme(theme);
    }
    // DOM manipulation ahead!
    useEffect(() => {
        // direct DOM manipulation is not safe, must use useRef hook
        if (appTheme === 'dark') {
            document.querySelector('.calculationscreen-wrapper').classList.remove('light');
            document.querySelector('.calculationscreen-wrapper').classList.add('dark');
        }
        if (appTheme === 'light') {
            document.querySelector('.calculationscreen-wrapper').classList.remove('dark');
            document.querySelector('.calculationscreen-wrapper').classList.add('light');
        }
    }, [appTheme]);
    // - THEME SECTION END -

    return (
        <main className='calculationscreen-wrapper'>
        <AppBar theme={ appTheme } changetheme={ setCurrentTheme } />
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