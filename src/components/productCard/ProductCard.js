import React from "react";
import './productcard.css';

function ProductCard({ productInfo, removeItem, handleInput }) {
    
    // extract info from productinfo obj
    const { id, productname, productimg, productunit, enteredData } = productInfo

    return (
        <div className='product-wrapper'>
            <div className='product-name-wrapper'>
                <span className='product-name'>{ productname }</span>
                <div className='remove-product' onClick={ () => removeItem(id) }>x</div>
            </div>
            <div className='product-card'>
                <div className='product-img-wrapper'>
                    <img className='product-img' src={ productimg } alt='device' />
                </div>
                <div className='product-info-wrapper'>
                    <div className='pinfo-subwrapper'>
                        <input
                            type='number'
                            className='product-info'
                            placeholder='X'
                            // defaultValue={ productunit }
                            value={ enteredData.watts > 0 ? enteredData.watts : '' }
                            onChange={ (e) => handleInput(id, 'watts', e.target.value) }
                        />
                        <span className='title-level-4'>Watts</span>
                    </div>
                    <div className='pinfo-subwrapper'>
                        <input
                            type='number'
                            className='product-info'
                            placeholder='X'
                            value={ enteredData.count > 0 ? enteredData.count : '' }
                            onChange={ (e) => handleInput(id, 'count', e.target.value) }
                        />
                        <span className='title-level-4'>Count</span>
                    </div>
                    <div className='pinfo-subwrapper'>
                        <input
                            type='number'
                            className='product-info'
                            placeholder='X'
                            value={ enteredData.hours > 0 ? enteredData.hours : '' }
                            onChange={ (e) => handleInput(id, 'hours', e.target.value) }
                        />
                        <span className='title-level-4'>Hours</span>
                    </div>
                </div>
                <div className='product-calculate-icon'>
                    {/* PASSES ID AND INPUT VALUES TO PARENT */}
                    <button className='product-calculate' onClick={ () => {} }>go</button>
                </div>
            </div>
            <div className="product-consumption-wrapper">
                <div className="product-consumption">units: <span id="individualUnitConsumption">{0}</span></div>
                <div className="product-consumption">cost: <span id="individualCostConsumption">{0}</span></div>
            </div>
        </div>
    );
}

export default ProductCard; 