import React from "react";
import './optimizedCard.css';

export default function OptimizedCard({ name, icon, workinghr, preferredHr }) {
    return (
        <div className="optimizedcard-wrapper">
            <div className="optimizedcard">
                <div className="oicon-wrapper">
                    <img className="oicon" src={ icon } alt={ name } />
                </div>
                <div className="working-hours">
                    <h4>working hr</h4>
                    <h2 className={ preferredHr ?  `optimizedcard-title bad-usage` : `optimizedcard-title good-usage`  }>{ workinghr }</h2>
                </div>
                <div className="preferred-hours">
                    { preferredHr && <> <h4>preferred hr</h4> <h2 className="optimizedcard-title good-usage">{ preferredHr }</h2> </> }

                </div>
            </div>
        </div>           
    );
}