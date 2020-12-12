import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Quotes.scss'
import * as Bi from 'react-icons/bi'

function Quotes() {
    const [quotes, setQuotes] = useState("");
    const [authors, setAuthors] = useState("");
    const [id, setId] = useState("");
    
    const QuotesApi = async () => {
        let arrQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random");
            arrQuotes = data.data;
            console.log(arrQuotes);
        } catch (err) {
            console.log(err);
        }

        try {
            setQuotes(arrQuotes.content);
            setAuthors(arrQuotes.author);
            setId(arrQuotes._id);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        QuotesApi();
    }, [])

    return (
        <div key={id} className="quotes">
            <div className="quotes_container">
                <p>	&quot;{quotes}&quot;</p>
                <span>{authors}</span>
            </div>
            <Bi.BiRefresh onClick={QuotesApi}/>
        </div>
    )
}

export default Quotes