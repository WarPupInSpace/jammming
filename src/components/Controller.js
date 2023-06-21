import React, { useState, useEffect } from "react";
import Playlist from "./playlist/Playlist";
import ResultList from "./resultList/ResultList";
import SearchForm from "./searchForm/SearchForm";
import './StyleGroup.css';

// controller handles data, acts as the stateful component

const Controller = () => {
    const [searchValue, setSearchValue] = useState('');

    const searchHandler = (value) => {
        setSearchValue(value);
    }

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

    return (
        <>
            <SearchForm searchHandler={searchHandler}/>
            <div className="flex">
                <ResultList />
                <Playlist />
            </div>
        </>
    )
}

export default Controller;