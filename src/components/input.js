import React, { useState } from "react";

function Input() {

    const [data, setData] = useState("");

    function handleChange(e) {
        setData(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(data !== "") {
            console.log(data);
            setData("");
        }
    }

    return(
        <div>
            <h1>hello</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={data}></input> 
            </form>
        </div>
    );
}

export default Input;