import React, {useState} from 'react';
import './SearchForm.css'

const SearchForm = (props) => {
    const [value, setValue] = useState('');

    const updateValue = (event) => {
        setValue(event.target.value);
    } 

    const handleClick = () => {
        props.searchHandler(value);
    }

    return (
        <>
            <div className='SearchForm'>
                <input name='' onChange={updateValue} value={value} placeholder='Search songs' />
                <button onClick={handleClick}>Search</button>
            </div>
        </>
    )
}

export default SearchForm;