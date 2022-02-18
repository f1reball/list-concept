import React, { useState, useEffect } from "react";

import '../App.css';

function ListDisplay(props) {


    function switchStatus(item) {

        if(item.status){
            item.status = false;
        } else {
            item.status = true;
        }
        localStorage.setItem("listData", JSON.stringify(props.list));
    }

    const list = props.list.map((item, index) => 
        <li key={index} onClick={() => switchStatus(item, list)} className={item.status ? 'yes' : 'no'}>
            {item.text}
        </li>
    );

    return(
        <ul>{list}</ul>
    );
}

export default ListDisplay;