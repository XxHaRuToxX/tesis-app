import { useState } from 'react';


export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const reset=()=>{
        setFormValues(initialState);
    }

    const handleInputChange=(e)=>{
        /* console.log(e.target.name)
        console.log(e.target.value) */
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    /* return{
        formValues,
        handleInputChange,
    } */
    return[
        formValues,
        handleInputChange,
        reset,
    ]
}