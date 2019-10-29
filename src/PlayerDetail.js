import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function PlayerDetail(props){
    const path = 'https://frozen-headland-94979.herokuapp.com' + window.location.pathname;
    const [data, setData] = useState( [] );
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                path,
            );
            setData(result.data);
        };
        fetchData();
    }, [path]);

    return(
        <div>
            <h2>{data.strPlayer}</h2>
        </div>
    )
}

export default PlayerDetail;