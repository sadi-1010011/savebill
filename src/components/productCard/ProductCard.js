import React from "react";
import './productcard.css';

function ProductCard({ productInfo, removeItem }) {
    // extract info from productinfo obj
    const { id, productname, productimg, productunit } = productInfo
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
                        <input type='number' className='product-info' placeholder='X' defaultValue={ productunit } />
                        <span className='title-level-4'>Watts</span>
                    </div>
                    <div className='pinfo-subwrapper'>
                        <input type='number' className='product-info' placeholder='X' />
                        <span className='title-level-4'>Count</span>
                    </div>
                    <div className='pinfo-subwrapper'>
                        <input type='number' className='product-info' placeholder='X' />
                        <span className='title-level-4'>Hours</span>
                    </div>
                </div>
                <div className='product-calculate-icon'>
                    <button className='product-calculate'>go</button>
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