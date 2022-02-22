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
                <li key={index} className='noselect'>
                    <div key={index} className='noselect holder'>
                        {item.status ? <input className='check' type='checkbox' checked={false} readOnly onClick={() => switchStatus(item)}></input> : <input type='checkbox' className='check' readOnly checked={true} onClick={() => switchStatus(item)}></input>}
                        <h1 className={item.status ? 'todo' : 'completed'}>{item.text}</h1>
                        <h2 onClick={() => deleteItem(item, index)} className="buttonShove">×</h2>
                    </div>
                </li>
            )}

            </ul>
        </div>
    );
}

export default ListDisplay;