import React from "react";

function listDisplay(props) {

    const list = props.list.map((item, index) => 
        <li key={index}>
            {item}
        </li>
    );

    return(
        <ul>{list}</ul>
    );
}

export default listDisplay;