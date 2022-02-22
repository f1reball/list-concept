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
        props.list.splice(index, 1);

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
                <li key={index} className={ item.status ? 'yes noselect' : 'no noselect'}>
                    <div key={index} className='noselect holder'>
                        {item.status ? <input type='checkbox' checked={false} readOnly onClick={() => switchStatus(item)}></input> : <input type='checkbox' readOnly checked={true} onClick={() => switchStatus(item)}></input>}
                    <h1>{item.text}</h1>
                    <button onClick={() => deleteItem(item, index)} className="buttonShove"><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </li>
            )}

            </ul>
        </div>
    );
}

export default ListDisplay;