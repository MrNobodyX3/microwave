import './Buttons.css';
import './Display.js';

const Buttons = props => {
    return(
    <div className='Buttons'>
        <div className='button'>
         <button onClick={""} value="1">1</button>
         <button onClick={""} value="2">2</button>
         <button onClick={""} value="3">3</button>
         <button onClick={""} value="4">4</button>
         <button onClick={""} value="5">5</button>
         <button onClick={""} value="6">6</button>
         <button onClick={""} value="7">7</button>
         <button onClick={""} value="8">8</button>
         <button onClick={""} value="9">9</button>
         <button className='zero' onClick="" value="0">0</button>
        </div>
        <div className='menu'>
         <button className='stopBtn' onClick={""} value="Stop"><strong>Stop</strong></button>
         <button className='clearBtn' onClick={""} value="Clear"><strong>Clear</strong></button>
         <button className='startBtn' onClick={""} value="Start"><strong>Start</strong></button>
        </div>
    </div>
    );
};
//==================================================================
export default Buttons
