import React, { useState } from 'react';

function Input (props) {


        return(
            <div>
                <label className="filterText" htmlFor="fruit-filter">Filter These Fruits: </label>
                <input type="text" value={props.value} onChange={props.onChange}name="fruit-filter" />
            </div>
        );
    }


export default Input;