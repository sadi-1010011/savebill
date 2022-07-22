import React, { useState } from 'react';
import dataset from './dummydata/dataset'; // DATA
import './App.css'; // CSS
// COMPONENTS
import ProductCard from './components/productCard/ProductCard';
import AddProductComp from './components/addproducticon/AddProductComp';
import ResultComp from './components/resultComp/ResultComp';


export default function App() {

    // PREVIEW 2 DEFAULT DEVICES
    const previewDevices = dataset.slice(0,2); // remove on production build
    const [data, setData] = useState([ ...previewDevices ]);
    const [resultDiv, setResultDiv] = useState(true);
    
    function removeItem(id) {
        // removes the item by id
        setData(prevData => prevData.filter(data => data.id !== id));
    }

    function addItem(item) {
        // add item to existing list, if do so
        setData(prevData => [...prevData, { id: item.id, productname: item.productname, productimg: item.productimg, productunit: item.productunit, enteredData: item.enteredData }])
    }

    function handleInputData(id, prop, val) {
        // clone state data to update with new input data
        let newObj = [ ...data ];
        // !!! 
        // apply new data to specific device
        newObj.forEach(function(item) {
            if(item.id == id) {
                item.enteredData = {...item.enteredData, [prop]: Number(val) };
                console.log(item.enteredData)
            }
        });
        // save to state
        setData(newObj);
    }

    function calculateBill(bill) {
        // calculates bill...
        console.log('calculating bill..')
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
                resultDiv && <ResultComp />
            }
            <AddProductComp addItem = { addItem } />
            <button className='calculatebill-btn' onClick={ () => calculateBill(data) }>calculate</button>

        </main>
    );
}