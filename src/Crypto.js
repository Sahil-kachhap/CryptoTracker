import React from 'react'
import './Crypto.css'

export const Crypto = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
               <div className='crypto'>
                   <img src={image} alt='cryptocoin'/>
                   <h1>{name}</h1>
                   <p className='crypto-symbol'>{symbol}</p>
               </div>
               <div className='crypto-data'>
                 <p className='crypto-price'>₹{price}</p>
                 <p className='crypto-volume'>₹{volume.toLocaleString()}</p>
                 {priceChange < 0 ? (
                     <p className='crypto-percent red'>{priceChange.toFixed(2)}%
                     </p>): (<p className='crypto-percent green'>{priceChange.toFixed(2)}%
                     </p>)}
                    <p className='crypto-mktcap'>Mkt Cap: ₹{marketcap.toLocaleString()}</p>
               </div>
            </div>
        </div>
    );
};
