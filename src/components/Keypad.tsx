import React from 'react';

/** IProps */
interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/** Keypad component */
const Keypad: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className='calc-buttons'>
      <div className='functions-one'>
        <button className='button trigger-button' onClick={onClick}>
          Clear
        </button>
        <button className='button basic-button' onClick={onClick}>
          (
        </button>
        <button className='button basic-button' onClick={onClick}>
          )
        </button>
        <button className='button number-button' onClick={onClick}>
          7
        </button>
        <button className='button number-button' onClick={onClick}>
          8
        </button>
        <button className='button number-button' onClick={onClick}>
          9
        </button>
        <button className='button number-button' onClick={onClick}>
          4
        </button>
        <button className='button number-button' onClick={onClick}>
          5
        </button>
        <button className='button number-button' onClick={onClick}>
          6
        </button>
        <button className='button number-button' onClick={onClick}>
          1
        </button>
        <button className='button number-button' onClick={onClick}>
          2
        </button>
        <button className='button number-button' onClick={onClick}>
          3
        </button>
        <button className='button basic-button' onClick={onClick}>
          ±
        </button>
        <button className='button number-button' onClick={onClick}>
          0
        </button>
        <button className='button basic-button' onClick={onClick}>
          .
        </button>
      </div>

      <div className='functions-two'>
        <button
          className='button trigger-button'
          onClick={onClick}
        >{`<-`}</button>
        <button className='button operation-button ' onClick={onClick}>
          %
        </button>
        <button className='button operation-button ' onClick={onClick}>
          x !
        </button>
        <button className='button operation-button ' onClick={onClick}>
          x^
        </button>
        <button className='button basic-button' onClick={onClick}>
          *
        </button>
        <button className='button basic-button' onClick={onClick}>
          /
        </button>
        <button className='button operation-button ' onClick={onClick}>
          ln
        </button>
        <button className='button operation-button ' onClick={onClick}>
          e
        </button>
        <button className='button basic-button' onClick={onClick}>
          +
        </button>
        <button className='button operation-button ' onClick={onClick}>
          x ²
        </button>
        <button className='button operation-button ' onClick={onClick}>
          log
        </button>
        <button className='button operation-button ' onClick={onClick}>
          cos
        </button>
        <button className='button basic-button' onClick={onClick}>
          -
        </button>
        <button className='button operation-button ' onClick={onClick}>
          √
        </button>
        <button className='button operation-button ' onClick={onClick}>
          sin
        </button>
        <button className='button operation-button ' onClick={onClick}>
          tan
        </button>
        <button className='button trigger-button' onClick={onClick}>
          =
        </button>
        <button className='button operation-button ' onClick={onClick}>
          &#x003C0;
        </button>
        <button className='button operation-button ' onClick={onClick}>
          ∘
        </button>
        <button className='button operation-button ' onClick={onClick}>
          rad
        </button>
      </div>
    </div>
  );
};

export default Keypad;
