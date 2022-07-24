import React from "react";
import dataset from '../dummydata/dataset'; // DATA
import '../App.css'; // CSS
// COMPONENTS
import ProductCard from '../components/productCard/ProductCard';
import AddProductComp from '../components/addproducticon/AddProductComp';
import ResultComp from '../components/resultComp/ResultComp';

export default function CalculationScreen({ data, addItem, removeItem, handleInputData, calculateBill, resultDiv }) {
    return (
        <main className='calculationscreen-wrapper'>
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