import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from '../components/appBar/AppBar';
import '../App.css';


export default function EstimationScreen() {
    const [totalCost, setTotalCost] = useState(0);
    const [targetCost, setTargetCost] = useState(0);

     // get data through loacation API
     const navigate = useNavigate();
     const { state } = useLocation();
     const data = state.optimizeData;
     const theme = state.theme;
     let total = 0;

    // DARK LIGHT theme-
    const [appTheme, setAppTheme] = useState(theme);
    function setCurrentTheme(theme) {
        setAppTheme(theme);
    }
    // DOM manipulation ahead!
    useEffect(() => {
        // direct DOM manipulation is not safe, must use useRef hook
        if (appTheme === 'dark') {
            document.querySelector('.estimationscreen-wrapper').classList.remove('light');
            document.querySelector('.estimationscreen-wrapper').classList.add('dark');
        }
        if (appTheme === 'light') {
            document.querySelector('.estimationscreen-wrapper').classList.remove('dark');
            document.querySelector('.estimationscreen-wrapper').classList.add('light');
        }
    }, [appTheme]);
    // THEME SECTION END-


    // sum up total cost    
    useEffect(() => {
        data.forEach(function(item) {
            total += Math.floor(item.individualResult.cost);
        });
        setTotalCost(total);
    });

    // save entered amount to state
    function getTargetbill(amount) {
        setTargetCost(Number(amount));
    }

    return (
        <div className="estimationscreen-wrapper">
        <AppBar theme={ appTheme } changetheme={ setCurrentTheme } />
            <div className="estimationcard-container">
                <div className="estimation-card">
                    <h2 className="bill-title">expected bill</h2>
                    <h1>{ `$${ totalCost }` }</h1>
                </div>
                <div className="estimation-card">
                    <h2 className="bill-title">target amount</h2>
                    <input onChange={ (e) => getTargetbill(e.target.value) } value={ targetCost > 0 ? targetCost : '' } type='number' className="targetbill-input" placeholder="$ ..." />
                </div>
            </div>
            <button onClick={ () => navigate('/optimizationscreen', { state: { data: data, currentBill: totalCost, targetBill: targetCost, theme: appTheme  }}) } className="optimize-btn">optimize</button>
        </div>
    );
}