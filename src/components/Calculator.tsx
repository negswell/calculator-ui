import React from 'react';

import Keypad from './Keypad';
import Result from './Result';

import getResult from '../utils/getResult';
import getPercentage from '../utils/getPercentage';
import getSquare from '../utils/getSquare';
import getSquareRoot from '../utils/getSquareRoot';
import getPi from '../utils/getPi';
import getSin from '../utils/getSin';
import getCos from '../utils/getCos';
import getTan from '../utils/getTan';
import getLn from '../utils/getLn';
import getLog from '../utils/getLog';
import getFactorial from '../utils/getFactorial';
import getDegree from '../utils/getDegree';
import getE from '../utils/getE';

const Calculator: React.FC = () => {
  const [result, setResult] = React.useState<string>('');

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleReset = () => {
    setResult('');
  };

  const handleButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const text = e.currentTarget.innerText;
    let res: string;

    switch (text) {
      case '<-':
        handleBackspace();
        break;
      case 'Clear':
        handleReset();
        break;
      case '±':
        if (result.charAt(0) === '-') {
          setResult(result.slice(1));
        } else {
          setResult('-' + result);
        }
        break;
      case '%':
        res = await getPercentage(result);
        setResult(res);
        break;
      case 'x ²':
        res = await getSquare(result);
        setResult(res);
        break;
      case 'x^':
        setResult(result + '^');
        break;
      case 'x !':
        res = await getFactorial(result);
        setResult(res);
        break;
      case 'π':
        res = await getPi(result);
        setResult(res);
        break;
      case 'e':
        res = await getE(result);
        setResult(res);
        break;
      case 'rad':
        res = await getPi(result);
        setResult(res);
        break;
      case '∘':
        res = await getDegree(result);
        setResult(res);
        break;
      case '√':
        res = await getSquareRoot(result);
        setResult(res);
        break;
      case 'sin':
        res = await getSin(result);
        setResult(res);
        break;
      case 'cos':
        res = await getCos(result);
        setResult(res);
        break;
      case 'tan':
        res = await getTan(result);
        setResult(res);
        break;
      case 'log':
        res = await getLog(result);
        setResult(res);
        break;
      case 'ln':
        res = await getLn(result);
        setResult(res);
        break;
      case '=':
        res = await getResult(result);
        setResult(res);
        break;
      default:
        setResult(result + text);
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  return (
    <div className='calculator'>
      <Result value={result} onChange={handleInputChange} />
      <Keypad onClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
