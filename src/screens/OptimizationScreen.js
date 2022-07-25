import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OptimizedCard from '../components/optimizedCard/OptimizedCard';
import AppBar from "../components/appBar/AppBar";
import '../App.css';

export default function OptimizationScreen() {

    // extract data, values..
    const { state } = useLocation();
    const { data, currentBill, targetBill } = state;
    const [localStateData, setLocalStateData] = useState({});

    // calculation variables
    let diffAmount = 0;
    let diffAmountinPercent = 0;
    let individualpercent = 0;
    let percentToReduce = 0;
    let hourToReduce = 0;
    let preferredHour = 0;
    

    // OPTIMIZATION ALGORITHM GOES HERE:

    useEffect(() => {
        // cost difference to be reduced - 472
        diffAmount = currentBill - targetBill;
        // converts cost diff into %
        diffAmountinPercent = (diffAmount * 100) / currentBill;
        // show in console
        // console.log(diffAmountinPercent, ' %');

        // loop throught each item in list
        data.map(item => {

            // split to each device - light, fan, tv equall
            individualpercent = diffAmountinPercent / 3;

            // console.log(individualpercent)
                    // MAIN LOGIC !!
            // only reduce if following items are over used.
            switch (item.productname) {
                case 'Light Bulb': {
                        // finds the % to reduce from working hours 2%
                        percentToReduce = (item.enteredData.hours * individualpercent) / 100;
                        // converts obtained % into hours
                        hourToReduce = (item.enteredData.hours * percentToReduce) / 100;
                        // find diff between working hour and var(hourToReduce)
                        preferredHour = item.enteredData.hours - hourToReduce;
                        // saves to data object in 4 digit precision
                        item.optimizedhour = (preferredHour).toPrecision(3);
                        break;
                    }
                case 'Television': {
                    // use React hook useRef to preserve data between re-render
                        percentToReduce = (item.enteredData.hours * individualpercent) / 100;
                        hourToReduce = (item.enteredData.hours * percentToReduce) / 100;
                        preferredHour = item.enteredData.hours - hourToReduce;
                        item.optimizedhour = (preferredHour).toPrecision(3);
                        break;
                    }
                case 'Cieling Fan': {
                        percentToReduce = (item.enteredData.hours * individualpercent) / 100;
                        hourToReduce = (item.enteredData.hours * percentToReduce) / 100;
                        preferredHour = item.enteredData.hours - hourToReduce;
                        item.optimizedhour = (preferredHour).toPrecision(3);
                        break;
                    }
            }

            // this re-render on setstate causes data object to be saved with item.optimizedhour variable
            setLocalStateData(data);
            
        });
        // check if algorithm output is meaningful:
        console.log(data);
    });

    // DARK LIGHT theme
    const [appTheme, setAppTheme] = useState('dark');
    function setCurrentTheme(theme) {
        setAppTheme(theme);
    }
    // DOM manipulation ahead!
    useEffect(() => {
        // direct DOM manipulation is not safe, must use useRef hook
        if (appTheme == 'dark') {
            document.querySelector('.optimizationscreen').classList.remove('light');
            document.querySelector('.optimizationscreen').classList.add('dark');
        }
        if (appTheme == 'light') {
            document.querySelector('.optimizationscreen').classList.remove('dark');
            document.querySelector('.optimizationscreen').classList.add('light');
        }
    }, [appTheme]);
    // - THEME SECTION END -


    return (
    
        <div className="optimizationscreen">
            <AppBar theme={ appTheme } changetheme={ setCurrentTheme } />
            {
            data.map(item => <OptimizedCard
                key={ item.id }
                name={ item.productname }
                icon={ item.productimg }
                workinghr={ item.enteredData.hours }
                preferredHr={ item.optimizedhour }
            />)
        }
            <div className="targetbillinfo-subwrapper">
                <div className="result-unit-wrapper">current bill: <h2 className="resultbill-info">{ currentBill }</h2></div>
                <div className="result-unit-wrapper">target bill: <h2 className="resultbill-info">{ targetBill }</h2></div>
            </div>
        </div>
    );
    
}