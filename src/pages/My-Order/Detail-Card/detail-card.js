import React from 'react';
import './detail-card.scss';

const DetailCard = () => {
    return (
        <div id='card'>
            <div className='container'>
                <h1>Add Debit Card</h1>
                <div className='card'>
                    <div className='card--name'>
                        <h2>Name Or Debit Card</h2>
                        <input type="text"/>
                        <h2>Card Number</h2>
                        <input type="number"/>
                    </div>
                    <div className='card--number'>
                        <div className='card--number__date'>
                            <h2>Exp Date</h2>
                            <input type="number"/>
                        </div>
                        <div className='card--number__cvv'>
                            <h2>CVV</h2>
                            <input type="number"/>
                        </div>
                    </div>
                    <div className='card--delivery'>
                        <h1>Dilivery Address</h1>
                        <input type="text"/>
                    </div>
                    <div className='card--btn'>
                        <button>Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;