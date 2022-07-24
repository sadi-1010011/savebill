import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultComp.css';

export default function ResultComp({ result, optimizeData }) {
    const navigate = useNavigate();
    const { unit, cost } = result;
    return (
        <>
        <div className='result-wrapper'>
            <div className='result-unit-wrapper'>
                <h2 className='result-unit'>{ unit } W</h2>
            </div>
            <div className='result-cost-wrapper'>
                <h2 className='result-cost'>{ cost } Rs</h2>
            </div>
        </div>
        <div>
            <button onClick={ () => navigate('/estimationscreen', { state: optimizeData }) }>optimize</button>
        </div>
        </>
    );
}