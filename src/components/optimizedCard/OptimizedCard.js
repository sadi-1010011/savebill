import React from "react";
import './optimizedCard.css';

export default function OptimizedCard({ name, icon, workinghr, preferredHr }) {

    // used to convert hour to minutes
    function getMinutesfromHours(hour) {
        return (hour * 60).toFixed(1);
    }

    const minutesToReduce = getMinutesfromHours(workinghr - preferredHr)

    return (
        <div className="optimizedcard-wrapper">
            <div className="optimized-subwrapper">
                <div className="optimizedcard">
                    <div className="oicon-wrapper">
                        <img className="oicon" src={ icon } alt={ name } />
                    </div>
                    <div className="working-hours">
                        <h4>working hr</h4>
                        <h2 className={ (minutesToReduce > 0) ?  `optimizedcard-title bad-usage` : `optimizedcard-title good-usage`  }>{ workinghr }</h2>
                    </div>
                    <div className="preferred-hours">
                        { (minutesToReduce > 0) && <> <h4>preferred hr</h4> <h2 className="optimizedcard-title good-usage">{ preferredHr }</h2> </> }
                    </div>
                </div>
                <h5 className="optimized-note">
                    { minutesToReduce > 0 ? `Reduce overall usage of ${ name }, by ${ minutesToReduce } minutes evereday.` 
                                  : `${ name } usage is ok`
                    }
                </h5>
            </div>
        </div>           
    );
}