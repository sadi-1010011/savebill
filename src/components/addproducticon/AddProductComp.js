import React, { useEffect, useState } from "react";
import './addproduct.css';
import plusIcon from '../../assets/png/plus.png'; // ICON
import dataset from '../../dummydata/dataset'; // DATA


function AddProductComp({ addItem }) {

    // toggle menu, selected item
    // const [selectedItem, setSelectedItem] = useState(null); // for OK btn if needed
    const [visibility, setVisibility] = useState(false);
    
    useEffect(() => {
        // smooth scroll to bottom on menu popup
        if (visibility) window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    
    return (
        // NOTE! : CLasses are completely reused here, dont mind literal meaning of class names
        <div className='addproduct-wrapper'>
            <img className='addproduct'
                 src={plusIcon}
                 alt='add'
                 onClick={ () => {
                    setVisibility(true);
                }}
            />

            {/* TOGGLED MENU */}

            <div className={ `productlist-wrapper ${visibility ? 'visibleflex' : 'hidden'}`}>
                <div className='productlist-topbar'>
                    <span className='product-name'>select Device</span>
                    <div className='remove-product' onClick={ () => setVisibility(false) }>x</div>
                </div>
                <div className='productlist'>
                    {
                        dataset.map(item =>
                            <div key={item.id} className='product-item' onClick={ (event) => { setVisibility(false); addItem(item) }}>
                                <img className='productmenu-icon' src={item.productimg} alt={item.productname} />
                                <h4 className="productmenu-item-name">{ item.productname }</h4>
                            </div>)
                    }
                </div>
                <div className='productlist-bottombar'>
                    <button className='productmenu-cancel' onClick={ () => setVisibility(false) }>cancel</button>
                    {/* <button className='productmenu-ok' onClick={ () => { setVisibility(false); addItem(selectedItem); }}>select</button> */}
                </div>
            </div>
        </div>
    );
}

export default AddProductComp;