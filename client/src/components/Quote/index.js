import React, { useState, useEffect } from 'react';

function Quotes() {
    const [quotesData, setQuotesData] = useState({
        items: [],
        DataisLoaded: false
    });

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((json) => {
                setQuotesData({
                    items: json,
                    DataisLoaded: true
                });
            })
    }, []);


    const { items } = quotesData;
    return (
        <div className="card text-center m-3">
            <ol >
                <h6>{items.content}</h6>
                <h6>~{items.author}</h6>
            </ol>
        </div>
    );

}
export default Quotes; 