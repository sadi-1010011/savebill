import React from "react";
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return (
        <div className="homescreen-wrapper">
            <h1>home screen</h1>
            <div>
            <Link to='/calculationscreen'>add products</Link>
            <br/>
            <br/>
            <Link to='estimationscreen'>bill estimation</Link>            
            </div>
        </div>
    );
}