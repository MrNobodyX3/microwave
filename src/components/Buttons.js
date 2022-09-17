import React, { useState } from 'react';
import './Buttons.css';

const Buttons = props => {
    return(
        <div className='button'>
         <button onClick="choice('1')">1</button>
         <button>2</button>
         <button>3</button>
         <button>4</button>
         <button>5</button>
         <button>6</button>
         <button>7</button>
         <button>8</button>
         <button>9</button>
         <button className='zero'>0</button>
        </div>
    );
};
//==================================================================
export default Buttons