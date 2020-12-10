import React, { useState } from 'react';

function List (props){

    
    const fruitItems = props.fruits.map((eachFruit, index) => {
    return <li key={index}>{eachFruit}</li>
    })
    return(
            <div>
                <ul className="listedFruits">
                    {fruitItems}
                </ul>
            </div>
        );
    }


export default List;