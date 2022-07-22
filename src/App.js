import React, { useState } from 'react';
import dataset from './dummydata/dataset'; // DATA
import './App.css'; // CSS
// COMPONENTS
import ProductCard from './components/productCard/ProductCard';
import AddProductComp from './components/addproducticon/AddProductComp';


export default function App() {

    // PREVIEW 2 DEFAULT DEVICES
    const previewDevices = dataset.slice(0,2);
    const [data, setData] = useState([ ...previewDevices ]);    
    
    function removeItem(id) {
        // removes the item by id
        setData(prevData => prevData.filter(data => data.id !== id));
    }

    function addItem(item) {
        // add item to existing list, if do so
        setData(prevData => [...prevData, { id: item.id, productname: item.productname, productimg: item.productimg, productunit: item.productunit }])
    }

    return (
        <main className='main-wrapper'>
            {
                data.map(item =>
                    <ProductCard
                        key = {item.id}
                        productInfo = { item }
                        removeItem = { removeItem }
                    />)
            }
            <AddProductComp addItem = { addItem } />
            <button className='calculatebill-btn'>calculate</button>
        </main>
    );
}