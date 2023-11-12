import React, { useState } from 'react';

import Button from './Button';
import tipsInput from './tipsInput';
import ResetButton from './ResetButton';

const Tips = () => {

  const [perTips, setperTips] = useState('');
  const [bill, setbill] = useState(0);
  const [people, setpeople] = useState(0);

  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const [resetAvail, setresetAvail] = useState(true);
  const [resetButtons, setresetButtons] = useState('disabledBtn');

  const ResetHandler = () => {
    setresetButtons('disabledBtn');
    setresetAvail(false);
  };

  const ButtonChangeHandler = (event) => {
    if (e) {

    }
  };

  return (
    <main>
      <div className='user'>
     <section className='bill'>
      <h1>Bill</h1>
     </section>
        <section className='tip-selection'>
          <h2>Select Tip %</h2>
             <div className='buttons'>
          <Button buttonName='5%' buttonValue='0.05' divClassName='tip-button' buttonNameNum='5' changeHandler={ButtonChangeHandler}/>
          <Button buttonName='10%' buttonValue='0.10' divClassName='tip-button' buttonNameNum='10' changeHandler={ButtonChangeHandler}/>
          <Button buttonName='15%' buttonValue='0.15' divClassName='tip-button' buttonNameNum='15' changeHandler={ButtonChangeHandler}/>
          <Button buttonName='25%' buttonValue='0.25' divClassName='tip-button' buttonNameNum='25' changeHandler={ButtonChangeHandler}/>
          <Button buttonName='50%' buttonValue='0.50' divClassName='tip-button' buttonNameNum='50' changeHandler={ButtonChangeHandler}/>
            <tipsInput inputValue='Custom' divClassName='tip-button'
            />
          </div>
        </section>
        <section className='people'>
          <div className='heading-error'>
            <div>
              <h2>People</h2>
            </div>
            <div>
              <p className='errordisplay-message'>Cant be Zero</p>
            </div>
          </div>
        </section>
      </div>
      <div className='results'>
        <div className='calculations'>
          <section className='amount'>
            <div>
              <h2 className='sum'>
                Tip Amount <span className='pp'>/ person</span>
              </h2>
            </div>
            <div className='sum2'>
              <p className='tipped'>
                $<span id='tip-display'>{tip}</span>
              </p>
            </div>
          </section>
          <section className='total'>
            <div className='sum3'>
              <h2 className='tips'>
                Total <span className='pp'>/ person</span>
              </h2>
            </div>
            <div className='total'>
              <p className='tips2'>
                $<span id='total'>{total}</span>
              </p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default Tips;
