import React, { useState } from 'react';
import dataset from './dummydata/dataset'; // DATA
import './App.css'; // CSS
// COMPONENTS
import ProductCard from './components/productCard/ProductCard';
import AddProductComp from './components/addproducticon/AddProductComp';
import ResultComp from './components/resultComp/ResultComp';


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
        // LOGIC HERE..
        let billCopy = [ ...bill ];
        // loops through each item
        billCopy.forEach(function(item) {
            let { watts, count, hours } = item.enteredData;
            item.individualResult.unit = (watts * count * hours * 30) / 1000;
            item.individualResult.cost = (watts * count * hours * 30 * 6.15) / 1000;
        });

        // also find total units and total cost
        let totalUnit = 0, totalCost = 0;

        billCopy.forEach(function(item) {
            totalUnit += Math.floor(item.individualResult.unit);
            totalCost += Math.floor(item.individualResult.cost);
        });

        // update n show total result
        const resultDivCopy = resultDiv;
        resultDivCopy.visible = true;
        resultDivCopy.result = { unit: totalUnit, cost: totalCost };

        setResultDiv(resultDivCopy);

        // update new data
        setData(billCopy);

    }

    return (
        <main className='main-wrapper'>
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
                resultDiv.visible && <ResultComp result={ resultDiv.result } />
            }
            <AddProductComp addItem = { addItem } />
            <button className='calculatebill-btn' onClick={ () => calculateBill(data) }>calculate</button>
        </main>
    );
}