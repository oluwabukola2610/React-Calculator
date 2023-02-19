import React, { useState } from 'react';
import './Calc.css';

function Calc() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['+', '-', '/', '*', '%'];

  const updateCal = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    } else {
      setCalc(calc + value);
    };

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };

  function calculate() {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  }

  function deleteCalc() {
    setResult('')

    if (calc === '') {
      return;
    } else {
      setCalc(calc.slice(0, -1));
    }
  }

  return (
    <div className='Calc'>
      <div className='display-calc'>
       <div className='input'> 
        {calc || '0'}</div>
       <div className='output'>{result ? <span>{result}</span> : ''}</div>
      </div>
      <div className='operators'>
        <button onClick={() =>{ setCalc(''); setResult('')}} className='operator'>
          AC
        </button>
        <button onClick={deleteCalc} className='operator'>
          DEL
        </button>
        <button onClick={() => updateCal('%')} className='operator'>
          %
        </button>
        <button onClick={() => updateCal('/')} className='operator'>
          /
        </button>
        <div>
          <button onClick={() => updateCal('7')}>7</button>
          <button onClick={() => updateCal('8')}>8</button>
          <button onClick={() => updateCal('9')}>9</button>
          <button className='operator' onClick={() => updateCal('*')}>
            *
          </button>
        </div>
        <div>
          <button onClick={() => updateCal('4')}>4</button>
          <button onClick={() => updateCal('5')}>5</button>
          <button onClick={() => updateCal('6')}>6</button>
          <button onClick={() => updateCal('-')} className='operator'>
            -
          </button>
        </div>
        <div>
          <button onClick={() => updateCal('1')}>1</button>
          <button onClick={() => updateCal('2')}>2</button>
          <button onClick={() => updateCal('3')}>3</button>
          <button className='operator' onClick={() => updateCal('+')}>
            +
          </button>
        </div>
        <div>
          <button onClick={() => updateCal('.')}>.</button>
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('00')}>00</button>

          <button onClick={calculate} className='equals'>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
