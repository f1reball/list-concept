import React, { useState } from "react";

function Input(props) {
    const [data, setData] = useState("");

    function handleChange(e) {
        setData(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(data !== "") {
            props.listSetter(props.list.concat({"text": data, "status": true}));
            setData("");
        }
    }

    return(
        <div>
            <h1>Enter Text</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={data} maxLength='30'></input> 
            </form>
        </div>
    );
}

export default Input;