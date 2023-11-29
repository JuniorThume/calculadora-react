import { InputContainer } from "./styles";


const Input = ({displayValue}) => {
return (
    <InputContainer>
        <input disabled value={displayValue}/>
    </InputContainer>
        
    
    )
}

export default Input;