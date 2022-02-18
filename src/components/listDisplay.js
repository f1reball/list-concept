import React, { useState, useEffect } from "react";

import '../App.css';

function ListDisplay(props) {

    const [updater, setUpdater] = useState(true);


    function switchStatus(item) {
        
        if(item.status){
            item.status = false;
        } else {
            item.status = true;
        }
        if(updater) {
            setUpdater(false);
        } else {
            setUpdater(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("listData", JSON.stringify(props.list));
    }, [switchStatus]);


    return(
        <ul>
        {props.list.map((item, index) =>
            <li key={index} onClick={() => switchStatus(item, props.list)} className={item.status ? 'yes' : 'no'}>
                {item.text}
            </li>
        )}

        </ul>
    );
}

export default ListDisplay;