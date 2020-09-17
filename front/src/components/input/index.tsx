import React,{ InputHTMLAttributes,useEffect,useRef } from 'react';
import { useField } from '@unform/core';
import { InputStyle } from './style';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

const Input: React.FC<InputProps> = ({name,...rest}) => {

    const inputRef = useRef(null);
    const { fieldName,defaultValue,error,registerField} =  useField(name);

   useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
   },[registerField,fieldName]);

    return(
        <>
            <InputStyle ref={ inputRef } defaultValue={defaultValue}  {...rest}></InputStyle>
            { error }
        </>
    )
}

export default Input;