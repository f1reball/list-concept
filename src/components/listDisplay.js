import React from "react";

function listDisplay(props) {

    function switchStatus(item) {
        if(item.status === 0){
            item.status = 1;
        } else {
            item.status = 0;
        }
    }

    const list = props.list.map((item, index) => 
        <li key={index} onClick={() => switchStatus(item)}>
            {item.text}
        </li>
    );

    return(
        <ul>{list}</ul>
    );
}

export default listDisplay;