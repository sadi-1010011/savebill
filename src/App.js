import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dataset from './dummydata/dataset'; // DATA
// SCREENS
import HomeScreen from './screens/HomeScreen';
import CalculationScreen from './screens/CalculationScreen';
import EstimationScreen from './screens/EstimationScreen';
import OptimizationScreen from './screens/OptimizationScreen';

export default function App() {

    // PREVIEW 2 DEFAULT DEVICES
    const previewDevices = dataset.slice(0,1); // remove on production build
    const [data, setData] = useState([ ...previewDevices ]);
    const [resultDiv, setResultDiv] = useState({ visible: false, result: { unit: 0, cost: 0 } });
    
    function removeItem(id) {
        // removes the item by id
        setData(prevData => prevData.filter(data => data.id !== id));
    }

    function addItem(item) {
        // add item to existing list, if do so
        setData(prevData => [...prevData, { id: item.id, productname: item.productname, productimg: item.productimg, productunit: item.productunit, enteredData: item.enteredData, individualResult: item.individualResult }])
    }

    function handleInputData(id, prop, val) {
        // clone state data to update with new input data
        let newObj = [ ...data ];
        // !!! 
        // apply new data to specific device
        newObj.forEach(function(item) {
            if(item.id === id) {
                item.enteredData = {...item.enteredData, [prop]: Number(val) };
                // console.log(item.enteredData)
            }
        });
        // save to state
        setData(newObj);
    }

    function calculateBill(bill) {
        console.log('calculating bill..');
        // LOGIC HERE:
        let billCopy = [ ...bill ];

        // loops through each item
        billCopy.forEach(function(item) {
            let { watts, count, hours } = item.enteredData;
            // APPLY LOGIC
            item.individualResult.unit = (watts * count * hours * 30) / 1000;
            item.individualResult.cost = (watts * count * hours * 30 * 6.15) / 1000;
        });

        // also find total units and total cost
        let totalUnit = 0, totalCost = 0;
        billCopy.forEach(function(item) {
            totalUnit += Math.floor(item.individualResult.unit);
            totalCost += Math.floor(item.individualResult.cost);
        });

        // update total result
        const resultDivCopy = resultDiv;
        resultDivCopy.visible = true;
        resultDivCopy.result = { unit: totalUnit, cost: totalCost };
        
        // update new data
        setResultDiv(resultDivCopy);
        setData(billCopy);

    }

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={ <HomeScreen /> }></Route>
                <Route exact path='/calculationscreen' element={
                    <CalculationScreen
                        data={ data }
                        addItem={ addItem }
                        removeItem={ removeItem }
                        handleInputData={ handleInputData }
                        resultDiv={ resultDiv }           
                        calculateBill= { calculateBill } 
                        />
                    }>
                </Route>
                <Route exact path='/estimationscreen' element={ <EstimationScreen /> }></Route>
                <Route exact path='/optimizationscreen' element={ <OptimizationScreen /> }></Route>
            </Routes>
        </Router>
    );
}