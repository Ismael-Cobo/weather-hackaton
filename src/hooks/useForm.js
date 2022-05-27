import { useState } from "react"

//Fijate en las props
export const useForm = ( initialState = {} ) => {
    
    const [values, setvalues] = useState(initialState)

    const reset = () =>{
        setvalues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value 
        })
    }


    return [values, handleInputChange, reset]
}
