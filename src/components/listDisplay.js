import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

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

    function deleteItem(item, index) {
        //console.log(props.list)
        const newList = props.list.splice(index, 1);
        console.log(newList);
        //console.log(index);
        if (updater) {
            setUpdater(false);
        } else {
            setUpdater(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("listData", JSON.stringify(props.list));
    });


    return(
        <div className="wrapper">
            <ul>
            {props.list.map((item, index) =>
                <li key={index} onClick={() => switchStatus(item)}  className={ item.status ? 'yes noselect' : 'no noselect'}>
                    <h1>{item.text}</h1>
                    <button onClick={() => deleteItem(item, index)} className="buttonShove"><FontAwesomeIcon icon={faTrashCan} /></button>
                </li>
            )}

            </ul>
        </div>
    );
}

export default ListDisplay;