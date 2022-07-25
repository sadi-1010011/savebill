import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultComp.css';

export default function ResultComp({ result, optimizeData }) {
    
    const navigate = useNavigate();
    // little UX here ;)
    const resultcard = useRef(null);

    function animateThisComponent() {
        console.log('animating this');
        resultcard.current.style.padding = '3rem';
        return 0;
    }

    useEffect(() => {
        // console.log(('result card test..'));
    });


    const { unit, cost } = result;

    return (
        <>
        <div className='result-wrapper'>
            <div className='result-unit-wrapper'>
                <h2 className='result-unit' ref={ resultcard }>{ unit } Unit</h2>
            </div>
            <div className='result-cost-wrapper'>
                <h2 className='result-cost'>{ cost } Rs</h2>
            </div>
        </div>
        <div>
            <button className='optimize-btn' onClick={ () => navigate('/estimationscreen', { state: optimizeData }) }>optimize</button>
        </div>
        </>
    );
}