import React, {useState} from 'react';
import Search from './tools/Search'
import axios from 'axios';
import Results from '.tools/Results'

function Motivate() {

    const apiurl = "https://rapidapi.com/martin.svoboda/api/Quotes/?apikey=8f91a32c67msh7f12827b1a004edp17c2c0jsnb87e0030954";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search;

                setState(prevState => {
                    return { ...prevState, results: results }
                })
            });
        }
    }

    const[state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });

    const handleInput = (e) => {
        let s = e.target.value;

    setState(prevState => {
        return {...prevState, s: s }
    });
    console.log(state.s);
    }
 
        return (
            <div className="Quotes"> 
                    <h1> Motivate (Quotes) Page</h1>
                <main>
                    <Search handleInput={handleInput} search={search} />
                    <Results results={state.results} />
                </main>
            </div>
        );  
    }

export default Motivate