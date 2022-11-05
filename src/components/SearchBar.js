import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Entry from "./Entry";

function SearchBar({placeholder, data, guessFunction, disabled}) {

    const [filteredData, setFilteredData] = useState(data);
    const [wordEntered, setWordEntered] = useState("");

    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        
        setFilteredData(newFilter);
    }
    
    const clearInput = () => {
        setWordEntered("");
        setFilteredData(data);
    }
    
    function myGuessFunction(enemy) {
        guessFunction(enemy);
        clearInput();
    }
    
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} disabled={disabled}/>
                <div className="searchIcon">
                    {wordEntered.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                </div>
            </div>
            {!disabled && (
            <div className="dataResult">
                {filteredData.map((enemy) => {
                    return (
                        <div key={enemy.name} className="searchBarEntryDiv" onClick={() => myGuessFunction(enemy)}>
                        <Entry enemy={enemy}>
                        </Entry>
                        </div>
                    )
                })}
            </div>)
            }
        </div>
    )
}

export default SearchBar