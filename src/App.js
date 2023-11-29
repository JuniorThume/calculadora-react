import { Container, Content, Row, Column } from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleAddNumber = (number) => {

    const numberIsZero = number === 0;
    const prevIsZero = (prev) => { return prev === 0; }

    setCurrentNumber((prev) => {
      if (prevIsZero(prev) && numberIsZero) {
        return 0;
      } else if (prevIsZero(prev) && !numberIsZero) {
        return number;
      } else {
        return prev;
      }
    });
  }

  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber(0)
    setFirstNumber(0)
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber)
      setCurrentNumber(0)
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber(0)
      setOperation('')
    }
  }

  const handleSubtractNumbers = () => {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber)
      setCurrentNumber(0)
      setOperation('-')
    } else {
      const subtract = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(subtract))
      setFirstNumber(0)
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber)
      setCurrentNumber(0)
      setOperation('x')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setFirstNumber(0)
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber)
      setCurrentNumber(0)
      setOperation('/')
    } else {
      const mult = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(mult))
      setFirstNumber(0)
      setOperation('')
    }
  }

  const divisionByZero = () => {
    if(operation === '/' && currentNumber === '') {
      console.error("Cuidade")
      setInterval( () => {
        setCurrentNumber('Não é possível dividir por zero')
      }, 1500)
      handleClear()
      return true;
    }
    return false;
  }

  const handleEquals = () => {
    divisionByZero()
    if(firstNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        
        case '-':
          handleSubtractNumbers();
          break;

        case 'x':
          handleMultNumbers();
          break;

        case '/':
          if(!divisionByZero()) {
            handleDivNumbers();
          }
          break;

        default:
          alert('Invalid Operation')
          break;
      }
    }

  }

  return (
    <Container>
      <Content>
        <Input displayValue={currentNumber}/>
        <Row>
          <Button label={'x'} onClick={ () => { handleMultNumbers() } } />
          <Button label={'/'} onClick={ () => { handleDivNumbers() } }/>
          <Button label={'C'} onClick={() => { handleClear()}} />
          <Button label={'\\'} />
        </Row>
        <Row>
          <Button label={7} onClick={ () => {handleAddNumber(7)} } />
          <Button label={8} onClick={ () => {handleAddNumber(8)} } />
          <Button label={9} onClick={ () => {handleAddNumber(9)} } />
          <Button label={'-'} onClick={ () => { handleSubtractNumbers() }} />
        </Row>
        <Row>
          <Button label={4} onClick={ () => {handleAddNumber(4)} } />
          <Button label={5} onClick={ () => {handleAddNumber(5)} } />
          <Button label={6} onClick={ () => {handleAddNumber(6)} } />
          <Button label={'+'} onClick={() => {handleSumNumbers()}} />
        </Row>
        <Row>
          <Button label={1} onClick={ () => {handleAddNumber(1)} } />
          <Button label={2} onClick={ () => {handleAddNumber(2)} } />
          <Button label={3} onClick={ () => {handleAddNumber(3)} } />
          <Button label={'='} onClick={ () => { handleEquals() } }/>
        </Row>
        <Row>
          <Button label={0} onClick={ () => {handleAddNumber(0)} } />
        </Row>
      </Content>
    </Container>

  );
}

export default App;
