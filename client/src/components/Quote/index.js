import React, { useState, useEffect } from 'react';

// class GetRequest extends React.Component { 
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }

//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch("https://api.quotable.io/random")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }



//     render() {
//         const { items } = this.state;
//         return (
//             <div className="card text-center m-3">
//                 <h5 className="card-header">Simple GET Request</h5>
//                 <ol className="card-body">
//                   <li>Quote: {items.content}</li>
//                  <li>Author: {items.author}</li>
//                 </ol>
//             </div>
//         );
//     }
// }
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
            {/* <h5 className="card-header">Simple GET Request</h5> */}
            <ol >
                <h6>{items.content}</h6>
                <h6>~{items.author}</h6>
            </ol>
        </div>
    );

}
export default Quotes; 