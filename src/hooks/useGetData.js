import {useState, useEffect} from 'react';
const api = 'https://marco-cv-api.firebaseio.com/.json';
const LANG = 'ES';
const useGetData = ()=>{
    const [myData, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(r=>  r.json())
            .then(data=>setData(data[LANG]))
    }, [])

    return myData;
}

export default useGetData;