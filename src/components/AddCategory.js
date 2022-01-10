import React, { useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputValue = ( e ) => {
        setInputValue( e.target.value );

        console.log('handle input change llamado')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategory( cats => [ inputValue, ...cats ]);
            setInputValue('');            
        }
    }
    

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
            /> 

        </form>
        
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
