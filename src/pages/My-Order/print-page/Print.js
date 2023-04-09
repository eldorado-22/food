import React from 'react';
import {AiFillCheckCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

const Print = () => {
    return (
        <div id='print'>
            <div className='container'>
                <div className='print'>
                    <div className='print--block'>
                        <AiFillCheckCircle className='print--block__icon'/>
                        <h2>Your order is accepted</h2>
                    </div>
                    <div className='print--btn'>
                        <Link to={"/"}>
                            <button>complete</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Print;