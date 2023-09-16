import React from 'react'
interface InputProps {
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}
const Input: React.FC<InputProps> = ({ setInputValue }) => {
    return (
        <input className='form-control ' type='text' alt='' placeholder='search' onChange={(e) => setInputValue(e.target.value)} />
    )
}

export default Input