import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function Hooks() {
    const [state, setState] = useState(null);
    const URL = "http://api.tvmaze.com/search/shows?q=girls";
    useEffect(() => {
        const getData = async () => {
            const res = await Axios.get(URL)
            setState(res)
            // console.log("ini tes", res)
        }
        getData();
    }, []);
    return state;
}
