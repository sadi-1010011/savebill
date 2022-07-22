import React from 'react';
import './ResultComp.css';

export default function ResultComp() {
    return (
        <div className='result-wrapper'>
            <div className='result-unit-wrapper'>
                <h2 className='result-unit'>... W</h2>
            </div>
            <div className='result-cost-wrapper'>
                <h2 className='result-cost'>... Rs</h2>
            </div>
        </div>
    );
}