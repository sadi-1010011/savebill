import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';


export default function EstimationScreen() {
    const [totalCost, setTotalCost] = useState(0);
    const [targetCost, setTargetCost] = useState(0);

    // get data through loacation API
    const { state } = useLocation();
    const navigate = useNavigate();
    let total = 0;

    // sum up total cost    
    useEffect(() => {
        state.forEach(function(item) {
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
            <div className="estimationcard-container">
                <div className="estimation-card">
                    <h2 className="bill-title">expected bill</h2>
                    <h1>{ `$${ totalCost }` }</h1>
                </div>
                <div className="estimation-card">
                    <h2 className="bill-title">target amount</h2>
                    <input onChange={ (e) => getTargetbill(e.target.value) } value={ targetCost } type='number' className="targetbill-input" placeholder="$ ..." />
                </div>
            </div>
            <button onClick={ () => navigate('/optimizationscreen', { state: { data: state, currentBill: totalCost, targetBill: targetCost  }}) } className="optimize-btn">optimize</button>
        </div>
    );
}