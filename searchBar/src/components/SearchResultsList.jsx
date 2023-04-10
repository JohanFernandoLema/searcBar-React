import React from "react";
import "./SearchResultsList.css"

export const SearchResulsList = ({results}) => {
    return (
    <div className="results-list">
        {
        results.map((result, id) => {
            return <SearchResul resutl={result} key={id}/>
        })}
    </div>
    );
};